package main

import (
	"fmt"
	"testing"
	"time"

	"github.com/stretchr/testify/assert"
)

func TestGetIdsToDelete(t *testing.T) {
	packages := []GithubPackageEntry{
		createPackageEntry(1, time.Now().AddDate(0, 0, -8), pr(1)),
		createPackageEntry(2, time.Now().AddDate(0, -1, 0), pr(2)),
		createPackageEntry(3, time.Now().AddDate(0, 0, -4), pr(3)),
		createPackageEntry(4, time.Now().AddDate(0, -3, 0), "v4.0.0-rc3"),
		createPackageEntry(5, time.Now().AddDate(0, 0, 0), "v4.0.0-rc0"),
		createPackageEntry(6, time.Now().AddDate(-1, 0, 0), "main"),
	}

	result := getIdsToDelete(packages)

	assert.Contains(t, result.IDsToDelete, 1, "week old pr image should be deleted")
	assert.Contains(t, result.IDsToDelete, 2, "month old pr image should be deleted")
	assert.NotContains(t, result.IDsToDelete, 3, "less than week old pr image should not be deleted")
	assert.NotContains(t, result.IDsToDelete, 4, "old non pr image should not be deleted")
	assert.NotContains(t, result.IDsToDelete, 5, "new non pr image should not be deleted")
	assert.NotContains(t, result.IDsToDelete, 6, "main image should not be deleted")

}

func pr(num int) string {
	return fmt.Sprintf("%s-%d", prTagPrefix, num)
}

func createPackageEntry(id int, createdAt time.Time, tag string) GithubPackageEntry {
	return GithubPackageEntry{
		ID:        id,
		CreatedAt: createdAt,
		MetaData: GithubPackageMetadata{
			Container: GithubContainer{
				Tags: []string{tag},
			},
		},
	}
}
