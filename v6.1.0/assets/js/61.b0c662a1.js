(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{621:function(e,t,r){"use strict";r.r(t);var o=r(0),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"ibc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ibc"}},[e._v("#")]),e._v(" "),r("code",[e._v("ibc")])]),e._v(" "),r("h2",{attrs:{id:"abstract"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),r("p",[e._v("This specification defines the implementation of the IBC protocol on the Cosmos SDK, the\nchanges made to the specification and where to find each specific ICS spec within\nthe module.")]),e._v(" "),r("p",[e._v("For the general specification please refer to the "),r("a",{attrs:{href:"https://github.com/cosmos/ics",target:"_blank",rel:"noopener noreferrer"}},[e._v("Interchain Standards"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"contents"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),r("ol",[r("li",[r("p",[r("strong",[e._v("Applications")])]),e._v(" "),r("p",[e._v("1.1. "),r("RouterLink",{attrs:{to:"/applications/transfer/spec/"}},[e._v("Transfer")])],1)]),e._v(" "),r("li",[r("p",[r("strong",[r("RouterLink",{attrs:{to:"/core/spec/"}},[e._v("Core")])],1)])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Light Clients")])]),e._v(" "),r("p",[e._v("3.1 "),r("RouterLink",{attrs:{to:"/light-clients/06-solomachine/spec/"}},[e._v("Solo Machine Client")])],1),e._v(" "),r("p",[e._v("3.2 "),r("RouterLink",{attrs:{to:"/light-clients/07-tendermint/spec/"}},[e._v("Tendermint Client")])],1),e._v(" "),r("p",[e._v("3.3 "),r("RouterLink",{attrs:{to:"/light-clients/09-localhost/spec/"}},[e._v("Localhost Client")])],1)])]),e._v(" "),r("h2",{attrs:{id:"implementation-details"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#implementation-details"}},[e._v("#")]),e._v(" Implementation Details")]),e._v(" "),r("p",[e._v("As stated above, the IBC implementation on the Cosmos SDK introduces some changes\nto the general specification, in order to avoid code duplication and to take\nadvantage of the SDK architectural components such as the transaction routing\nthrough "),r("code",[e._v("Handlers")]),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"interchain-standards-reference"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#interchain-standards-reference"}},[e._v("#")]),e._v(" Interchain Standards reference")]),e._v(" "),r("p",[e._v("The following list is a mapping from each Interchain Standard to their implementation\nin the SDK's "),r("code",[e._v("x/ibc")]),e._v(" module:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/cosmos/ics/tree/master/spec/ics-002-client-semantics",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS 002 - Client Semantics"),r("OutboundLink")],1),e._v(": Implemented in "),r("a",{attrs:{href:"https://github.com/cosmos/tree/master/ibc/core/02-client",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("x/ibc/core/02-client")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/cosmos/ics/blob/master/spec/ics-003-connection-semantics",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS 003 - Connection Semantics"),r("OutboundLink")],1),e._v(": Implemented in "),r("a",{attrs:{href:"https://github.com/cosmos/tree/master/ibc/core/03-connection",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("x/ibc/core/03-connection")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/cosmos/ics/blob/master/spec/ics-004-channel-and-packet-semantics",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS 004 - Channel and Packet Semantics"),r("OutboundLink")],1),e._v(": Implemented in "),r("a",{attrs:{href:"https://github.com/cosmos/tree/master/ibc/core/04-channel",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("x/ibc/core/04-channel")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/cosmos/ics/blob/master/spec/ics-005-port-allocation",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS 005 - Port Allocation"),r("OutboundLink")],1),e._v(": Implemented in "),r("a",{attrs:{href:"https://github.com/cosmos/tree/master/ibc/core/05-port",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("x/ibc/core/05-port")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/cosmos/ics/blob/master/spec/ics-006-solo-machine-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS 006 - Solo Machine Client"),r("OutboundLink")],1),e._v(": Implemented in "),r("a",{attrs:{href:"https://github.com/cosmos/tree/master/ibc/solomachine",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("x/ibc/light-clients/06-solomachine")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/cosmos/ics/blob/master/spec/ics-007-tendermint-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS 007 - Tendermint Client"),r("OutboundLink")],1),e._v(": Implemented in "),r("a",{attrs:{href:"https://github.com/cosmos/tree/master/ibc/light-clients/07-tendermint",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("x/ibc/light-clients/07-tendermint")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/cosmos/ics/blob/master/spec/ics-009-loopback-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS 009 - Loopback Client"),r("OutboundLink")],1),e._v(":  Implemented in "),r("a",{attrs:{href:"https://github.com/cosmos/tree/master/ibc/light-clients/09-localhost",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("x/ibc/light-clients/09-localhost")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/cosmos/ics/tree/master/spec/ics-018-relayer-algorithms",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS 018- Relayer Algorithms"),r("OutboundLink")],1),e._v(": Implemented in it's own "),r("a",{attrs:{href:"https://github.com/cosmos/relayer",target:"_blank",rel:"noopener noreferrer"}},[e._v("relayer repository"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/cosmos/ics/tree/master/spec/ics-020-fungible-token-transfer",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS 020 - Fungible Token Transfer"),r("OutboundLink")],1),e._v(": Implemented in "),r("a",{attrs:{href:"https://github.com/cosmos/tree/master/ibc/applications/transfer",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("x/ibc/applications/transfer")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/cosmos/ics/tree/master/spec/ics-023-vector-commitments",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS 023 - Vector Commitments"),r("OutboundLink")],1),e._v(": Implemented in "),r("a",{attrs:{href:"https://github.com/cosmos/tree/master/ibc/core/23-commitment",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("x/ibc/core/23-commitment")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/cosmos/ics/tree/master/spec/ics-024-host-requirements",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS 024 - Host Requirements"),r("OutboundLink")],1),e._v(": Implemented in "),r("a",{attrs:{href:"https://github.com/cosmos/tree/master/ibc/core/24-host",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("x/ibc/core/24-host")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/cosmos/ics/tree/master/spec/ics-025-handler-interface",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS 025 - Handler Interface"),r("OutboundLink")],1),e._v(": "),r("code",[e._v("Handler")]),e._v(" interfaces are implemented at the top level in "),r("code",[e._v("x/ibc/handler.go")]),e._v(",\nwhich call each ICS submodule's handlers (i.e "),r("code",[e._v("x/ibc/*/{XX-ICS}/handler.go")]),e._v(").")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/cosmos/ics/blob/master/spec/ics-026-routing-module",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS 026 - Routing Module"),r("OutboundLink")],1),e._v(": Replaced by "),r("RouterLink",{attrs:{to:"/docs/architecture/adr-015-ibc-packet-receiver.html"}},[e._v("ADR 15 - IBC Packet Receiver")]),e._v(".")],1)]),e._v(" "),r("h3",{attrs:{id:"architecture-decision-records-adr"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#architecture-decision-records-adr"}},[e._v("#")]),e._v(" Architecture Decision Records (ADR)")]),e._v(" "),r("p",[e._v("The following ADR provide the design and architecture decision of IBC-related components.")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/docs/architecture/adr-001-coin-source-tracing.html"}},[e._v("ADR 001 - Coin Source Tracing")]),e._v(": standard to hash the ICS20's fungible token\ndenomination trace path in order to support special characters and limit the maximum denomination length.")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/docs/architecture/adr-017-historical-header-module.html"}},[e._v("ADR 17 - Historical Header Module")]),e._v(": Introduces the ability to introspect past\nconsensus states in order to verify their membership in the counterparty clients.")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/docs/architecture/adr-019-protobuf-state-encoding.html"}},[e._v("ADR 19 - Protobuf State Encoding")]),e._v(": Migration from Amino to Protobuf for state encoding.")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/docs/architecture/adr-020-protobuf-transaction-encoding.html"}},[e._v("ADR 020 - Protocol Buffer Transaction Encoding")]),e._v(": Client side migration to Protobuf.")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/docs/architecture/adr-020-protobuf-query-encoding.html"}},[e._v("ADR 021 - Protocol Buffer Query Encoding")]),e._v(": Queries migration to Protobuf.")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/docs/architecture/adr-026-ibc-client-recovery-mechanisms.html"}},[e._v("ADR 026 - IBC Client Recovery Mechanisms")]),e._v(": Allows IBC Clients to be recovered after freezing or expiry.")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/docs/architecture/adr-027-ibc-wasm.html"}},[e._v("ADR 027 - IBC WASM Client")])],1)]),e._v(" "),r("h3",{attrs:{id:"sdk-modules"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sdk-modules"}},[e._v("#")]),e._v(" SDK Modules")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/cosmos/tree/master/x/capability",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("x/capability")]),r("OutboundLink")],1),e._v(": The capability module provides object-capability keys support through scoped keepers in order to authenticate usage of ports or channels. Check "),r("RouterLink",{attrs:{to:"/docs/architecture/adr-003-dynamic-capability-store.html"}},[e._v("ADR 3 - Dynamic Capability Store")]),e._v(" for more details.")],1)]),e._v(" "),r("h2",{attrs:{id:"ibc-module-architecture"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ibc-module-architecture"}},[e._v("#")]),e._v(" IBC module architecture")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("NOTE for auditors")]),e._v(": If you're not familiar with the overall module structure from\nthe SDK modules, please check this "),r("RouterLink",{attrs:{to:"/docs/building-modules/structure.html"}},[e._v("document")]),e._v(" as\nprerequisite reading.")],1)]),e._v(" "),r("p",[e._v("For ease of auditing, every Interchain Standard has been developed in its own\npackage. The development team separated the IBC TAO (Transport, Authentication, Ordering) ICS specifications from the IBC application level\nspecification. The following tree describes the architecture of the directories that\nthe "),r("code",[e._v("ibc")]),e._v(" (TAO) and "),r("code",[e._v("ibc-transfer")]),e._v(" ("),r("a",{attrs:{href:"https://github.com/cosmos/ics/tree/master/spec/ics-020-fungible-token-transfer",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS20"),r("OutboundLink")],1),e._v(") modules:")]),e._v(" "),r("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"eC9pYmMK4pSc4pSA4pSAIGFwcGxpY2F0aW9ucy8K4pSCICAg4pSU4pSA4pSAdHJhbnNmZXIvCuKUnOKUgOKUgCBjb3JlLwrilILCoMKgIOKUnOKUgOKUgCAwMi1jbGllbnQvCuKUgsKgwqAg4pSc4pSA4pSAIDAzLWNvbm5lY3Rpb24vCuKUgsKgwqAg4pSc4pSA4pSAIDA0LWNoYW5uZWwvCuKUgsKgwqAg4pSc4pSA4pSAIDA1LXBvcnQvCuKUgsKgwqAg4pSc4pSA4pSAIDIzLWNvbW1pdG1lbnQvCuKUgsKgwqAg4pSc4pSA4pSAIDI0LWhvc3QvCuKUgsKgICDilJzilIDilIAgY2xpZW50CuKUgsKgICDilILCoMKgIOKUlOKUgOKUgCBjbGkK4pSCICAg4pSCwqDCoMKgIMKgwqAg4pSU4pSA4pSAIGNsaS5nbwrilILCoCAg4pSc4pSA4pSAIGtlZXBlcgrilIIgIMKg4pSCICAg4pSc4pSA4pSAIGtlZXBlci5nbwrilILCoMKgIOKUgiAgIOKUlOKUgOKUgCBxdWVyaWVyLmdvCuKUgiAgIOKUnOKUgOKUgCB0eXBlcwrilIIgICDilIIgICDilJzilIDilIAgZXJyb3JzLmdvCuKUgiAgIOKUgiAgIOKUlOKUgOKUgCBrZXlzLmdvCuKUgiAgIOKUnOKUgOKUgCBoYW5kbGVyLmdvCuKUgiAgIOKUlOKUgOKUgCBtb2R1bGUuZ28K4pSc4pSA4pSAIGxpZ2h0LWNsaWVudHMvCuKUgsKgwqAg4pSc4pSA4pSAIDA2LXNvbG9tYWNoaW5lLwrilILCoMKgIOKUnOKUgOKUgCAwNy10ZW5kZXJtaW50LwrilILCoMKgIOKUlOKUgOKUgCAwOS1sb2NhbGhvc3QvCuKUlOKUgOKUgCB0ZXN0aW5nLwo="}})],1)}),[],!1,null,null,null);t.default=n.exports}}]);