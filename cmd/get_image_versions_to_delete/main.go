package main

import (
	"encoding/json"
	"fmt"
	"os"
	"os/exec"
	"strings"
	"time"
)

/*
Sample intput:
[
	{
	  "id": 34711653,
	  "name": "sha256:a6adc930d0a12d640717f1766d73cfe329b305cfda01c502713d93f636268ebc",
	  "url": "https://api.github.com/orgs/cosmos/packages/container/ibc-go-simd/versions/34711653",
	  "package_html_url": "https://github.com/orgs/cosmos/packages/container/package/ibc-go-simd",
	  "license": "MIT",
	  "created_at": "2022-08-12T10:01:45Z",
	  "updated_at": "2022-08-12T10:01:45Z",
	  "description": "Interblockchain Communication Protocol (IBC) implementation in Golang.",
	  "html_url": "https://github.com/orgs/cosmos/packages/container/ibc-go-simd/34711653",
	  "metadata": {
		"package_type": "container",
		"container": {
		  "tags": [
			"pr-1999"
		  ]
		}
	  }
	}
]
Sample output:

{"ids_to_delete":[34711653]}
*/

const (
	prTagPrefix = "pr-"
)

type GithubPackageEntry struct {
	ID        int                   `json:"id"`
	CreatedAt time.Time             `json:"created_at"`
	MetaData  GithubPackageMetadata `json:"metadata"`
}

type GithubPackageMetadata struct {
	Container GithubContainer `json:"container"`
}

type GithubContainer struct {
	Tags []string `json:"tags"`
}

type Result struct {
	IDsToDelete []int `json:"ids_to_delete"`
}

func fetchGithubPackages() ([]byte, error) {
	cmd := exec.Command("gh", "api", "-X", "GET", "/orgs/cosmos/packages/container/ibc-go-simd/versions")
	return cmd.CombinedOutput()
}

func main() {
	githubPackagesBytes, err := fetchGithubPackages()
	if err != nil {
		fmt.Printf("failed to fetch packages: %s\n", err.Error())
		os.Exit(1)
	}

	fmt.Println(string(githubPackagesBytes))

	var githubPackages []GithubPackageEntry
	if err := json.Unmarshal(githubPackagesBytes, &githubPackages); err != nil {
		//if err := json.Unmarshal([]byte(os.Args[1]), &githubPackages); err != nil {
		fmt.Printf("failed to unmarshal packages: %s\n", err.Error())
		os.Exit(1)
	}

	result := getIdsToDelete(githubPackages)

	bytes, err := json.Marshal(result)
	if err != nil {
		fmt.Printf("failed marshalling result: %s\n", err)
	}
	fmt.Println(string(bytes))
}

func getIdsToDelete(packages []GithubPackageEntry) Result {
	var idsToDelete []int
	for _, entry := range packages {
		if len(entry.MetaData.Container.Tags) != 1 {
			continue
		}
		tag := entry.MetaData.Container.Tags[0]
		lastWeek := time.Now().AddDate(0, 0, -7)
		if strings.HasPrefix(tag, prTagPrefix) && entry.CreatedAt.Before(lastWeek) {
			idsToDelete = append(idsToDelete, entry.ID)
			continue
		}
	}
	return Result{IDsToDelete: idsToDelete}
}
