package relayer

import (
	"fmt"
	"testing"

	interchaintest "github.com/DimitrisJim/ictest/v7"
	"github.com/DimitrisJim/ictest/v7/ibc"
	"github.com/DimitrisJim/ictest/v7/relayer"
	dockerclient "github.com/docker/docker/client"
	"go.uber.org/zap"
)

const (
	Rly    = "rly"
	Hermes = "hermes"

	hermesRelayerRepository = "ghcr.io/informalsystems/hermes"
	hermesRelayerUser       = "1000:1000"
	rlyRelayerRepository    = "damiannolan/rly" //"ghcr.io/cosmos/relayer"
	rlyRelayerUser          = "100:1000"        // docker run -it --rm --entrypoint echo ghcr.io/cosmos/relayer "$(id -u):$(id -g)"
)

// Config holds configuration values for the relayer used in the tests.
type Config struct {
	// Tag is the tag used for the relayer image.
	Tag string `yaml:"tag"`
	// Type specifies the type of relayer that this is.
	Type string `yaml:"type"`
	// Image is the image that should be used for the relayer.
	Image string `yaml:"image"`
}

// New returns an implementation of ibc.Relayer depending on the provided RelayerType.
func New(t *testing.T, cfg Config, logger *zap.Logger, dockerClient *dockerclient.Client, network string) ibc.Relayer {
	switch cfg.Type {
	case Rly:
		return newCosmosRelayer(t, cfg.Tag, logger, dockerClient, network)
	case Hermes:
		return newHermesRelayer(t, cfg.Tag, logger, dockerClient, network)
	default:
		panic(fmt.Sprintf("unknown relayer specified: %s", cfg.Type))
	}
}

// newCosmosRelayer returns an instance of the go relayer.
// Options are used to allow for relayer version selection and specifying the default processing option.
func newCosmosRelayer(t *testing.T, tag string, logger *zap.Logger, dockerClient *dockerclient.Client, network string) ibc.Relayer {
	customImageOption := relayer.CustomDockerImage(rlyRelayerRepository, tag, rlyRelayerUser)
	relayerProcessingOption := relayer.StartupFlags("-p", "events") // relayer processes via events

	relayerFactory := interchaintest.NewBuiltinRelayerFactory(ibc.CosmosRly, logger, customImageOption, relayerProcessingOption)

	return relayerFactory.Build(
		t, dockerClient, network,
	)
}

// newHermesRelayer returns an instance of the hermes relayer.
func newHermesRelayer(t *testing.T, tag string, logger *zap.Logger, dockerClient *dockerclient.Client, network string) ibc.Relayer {
	customImageOption := relayer.CustomDockerImage(hermesRelayerRepository, tag, hermesRelayerUser)
	relayerFactory := interchaintest.NewBuiltinRelayerFactory(ibc.Hermes, logger, customImageOption)

	return relayerFactory.Build(
		t, dockerClient, network,
	)
}
