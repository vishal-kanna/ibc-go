(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{674:function(e,t,n){"use strict";n.r(t);var i=n(1),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"_09-localhost"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_09-localhost"}},[e._v("#")]),e._v(" "),n("code",[e._v("09-localhost")])]),e._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",{attrs:{synopsis:""}},[e._v("Learn about the 09-localhost light client module.")]),e._v(" "),n("p",[e._v("The 09-localhost light client module implements a localhost loopback client with the ability to send and receive IBC packets to and from the same state machine.")]),e._v(" "),n("h3",{attrs:{id:"context"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),n("p",[e._v("In a multichain environment, application developers will be used to developing cross-chain applications through IBC. From their point of view, whether or not they are interacting with multiple modules on the same chain or on different chains should not matter. The localhost client module enables a unified interface to interact with different applications on a single chain, using the familiar IBC application layer semantics.")]),e._v(" "),n("h3",{attrs:{id:"implementation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),n("p",[e._v("There exists a "),n("RouterLink",{attrs:{to:"/ibc/light-clients/localhost/client-state.html"}},[e._v("single sentinel "),n("code",[e._v("ClientState")])]),e._v(" instance with the client identifier "),n("code",[e._v("09-localhost")]),e._v(".")],1),e._v(" "),n("p",[e._v("To supplement this, a "),n("RouterLink",{attrs:{to:"/ibc/light-clients/localhost/connection.html"}},[e._v("sentinel "),n("code",[e._v("ConnectionEnd")]),e._v(" is stored in core IBC")]),e._v(" state with the connection identifier "),n("code",[e._v("connection-localhost")]),e._v(". This enables IBC applications to create channels directly on top of the sentinel connection which leverage the 09-localhost loopback functionality.")],1),e._v(" "),n("p",[n("RouterLink",{attrs:{to:"/ibc/light-clients/localhost/state-verification.html"}},[e._v("State verification")]),e._v(" for channel state in handshakes or processing packets is reduced in complexity, the "),n("code",[e._v("09-localhost")]),e._v(" client can simply compare bytes stored under the standardized key paths.")],1),e._v(" "),n("h3",{attrs:{id:"localhost-vs-regular-client"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#localhost-vs-regular-client"}},[e._v("#")]),e._v(" Localhost vs "),n("em",[e._v("regular")]),e._v(" client")]),e._v(" "),n("p",[e._v("The localhost client aims to provide a unified approach to interacting with applications on a single chain, as the IBC application layer provides for cross-chain interactions. To achieve this unified interface though, there are a number of differences under the hood compared to a 'regular' IBC client (excluding "),n("code",[e._v("06-solomachine")]),e._v(" and "),n("code",[e._v("09-localhost")]),e._v(" itself).")]),e._v(" "),n("p",[e._v("The table below lists some important differences:")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th"),e._v(" "),n("th",[e._v("Regular client")]),e._v(" "),n("th",[e._v("Localhost")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("Number of clients")]),e._v(" "),n("td",[e._v("Many instances of a client "),n("em",[e._v("type")]),e._v(" corresponding to different counterparties")]),e._v(" "),n("td",[e._v("A single sentinel client with the client identifier "),n("code",[e._v("09-localhost")])])]),e._v(" "),n("tr",[n("td",[e._v("Client creation")]),e._v(" "),n("td",[e._v("Relayer (permissionless)")]),e._v(" "),n("td",[n("code",[e._v("ClientState")]),e._v(" is instantiated in the "),n("code",[e._v("InitGenesis")]),e._v(" handler of the 02-client submodule in core IBC")])]),e._v(" "),n("tr",[n("td",[e._v("Client updates")]),e._v(" "),n("td",[e._v("Relayer submits headers using "),n("code",[e._v("MsgUpdateClient")])]),e._v(" "),n("td",[e._v("Latest height is updated periodically through the ABCI "),n("a",{attrs:{href:"https://docs.cosmos.network/v0.47/building-modules/beginblock-endblock",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("BeginBlock")]),n("OutboundLink")],1),e._v(" interface of the 02-client submodule in core IBC")])]),e._v(" "),n("tr",[n("td",[e._v("Number of connections")]),e._v(" "),n("td",[e._v("Many connections, 1 (or more) per client")]),e._v(" "),n("td",[e._v("A single sentinel connection with the connection identifier "),n("code",[e._v("connection-localhost")])])]),e._v(" "),n("tr",[n("td",[e._v("Connection creation")]),e._v(" "),n("td",[e._v("Connection handshake, provided underlying client")]),e._v(" "),n("td",[e._v("Sentinel "),n("code",[e._v("ConnectionEnd")]),e._v(" is created and set in store in the "),n("code",[e._v("InitGenesis")]),e._v(" handler of the 03-connection submodule in core IBC")])]),e._v(" "),n("tr",[n("td",[e._v("Counterparty")]),e._v(" "),n("td",[e._v("Underlying client, representing another chain")]),e._v(" "),n("td",[e._v("Client with identifier "),n("code",[e._v("09-localhost")]),e._v(" in same chain")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("VerifyMembership")]),e._v(" and "),n("code",[e._v("VerifyNonMembership")])]),e._v(" "),n("td",[e._v("Performs proof verification using consensus state roots")]),e._v(" "),n("td",[e._v("Performs state verification using key-value lookups in the core IBC store")])]),e._v(" "),n("tr",[n("td",[e._v("Integration")]),e._v(" "),n("td",[e._v("Expected to register codec types using the "),n("code",[e._v("AppModuleBasic")]),e._v(" interface")]),e._v(" "),n("td",[e._v("Registers codec types within the core IBC module")])])])])])}),[],!1,null,null,null);t.default=o.exports}}]);