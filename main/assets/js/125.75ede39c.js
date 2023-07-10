(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{682:function(e,t,o){"use strict";o.r(t);var n=o(1),l=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),o("p",{attrs:{synopsis:""}},[e._v("Learn how to configure light client modules and create clients using core IBC and the "),o("code",[e._v("02-client")]),e._v(" submodule.")]),e._v(" "),o("p",[e._v("A last step to finish the development of the light client, is to implement the "),o("code",[e._v("AppModuleBasic")]),e._v(" interface to allow it to be added to the chain's "),o("code",[e._v("app.go")]),e._v(" alongside other light client types the chain enables.")]),e._v(" "),o("p",[e._v("Finally, a succinct rundown is given of the remaining steps to make the light client operational, getting the light client type passed through governance and creating the clients.")]),e._v(" "),o("h2",{attrs:{id:"configuring-a-light-client-module"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuring-a-light-client-module"}},[e._v("#")]),e._v(" Configuring a light client module")]),e._v(" "),o("p",[e._v("An IBC light client module must implement the "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/main/types/module/module.go#L50",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("AppModuleBasic")]),o("OutboundLink")],1),e._v(" interface in order to register its concrete types against the core IBC interfaces defined in "),o("code",[e._v("modules/core/exported")]),e._v(". This is accomplished via the "),o("code",[e._v("RegisterInterfaces")]),e._v(" method which provides the light client module with the opportunity to register codec types using the chain's "),o("code",[e._v("InterfaceRegistry")]),e._v(". Please refer to the "),o("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/light-clients/07-tendermint/codec.go#L11",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("07-tendermint")]),e._v(" codec registration"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("AppModuleBasic")]),e._v(" interface may also be leveraged to install custom CLI handlers for light client module users. Light client modules can safely no-op for interface methods which it does not wish to implement.")]),e._v(" "),o("p",[e._v("Please refer to the "),o("RouterLink",{attrs:{to:"/ibc/integration.html#integrating-light-clients"}},[e._v("core IBC documentation")]),e._v(" for how to configure additional light client modules alongside "),o("code",[e._v("07-tendermint")]),e._v(" in "),o("code",[e._v("app.go")]),e._v(".")],1),e._v(" "),o("p",[e._v("See below for an example of the "),o("code",[e._v("07-tendermint")]),e._v(" implementation of "),o("code",[e._v("AppModuleBasic")]),e._v(".")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dmFyIF8gbW9kdWxlLkFwcE1vZHVsZUJhc2ljID0gQXBwTW9kdWxlQmFzaWN7fQoKLy8gQXBwTW9kdWxlQmFzaWMgZGVmaW5lcyB0aGUgYmFzaWMgYXBwbGljYXRpb24gbW9kdWxlIHVzZWQgYnkgdGhlIHRlbmRlcm1pbnQgbGlnaHQgY2xpZW50LgovLyBPbmx5IHRoZSBSZWdpc3RlckludGVyZmFjZXMgZnVuY3Rpb24gbmVlZHMgdG8gYmUgaW1wbGVtZW50ZWQuIEFsbCBvdGhlciBmdW5jdGlvbiBwZXJmb3JtCi8vIGEgbm8tb3AuCnR5cGUgQXBwTW9kdWxlQmFzaWMgc3RydWN0e30KCi8vIE5hbWUgcmV0dXJucyB0aGUgdGVuZGVybWludCBtb2R1bGUgbmFtZS4KZnVuYyAoQXBwTW9kdWxlQmFzaWMpIE5hbWUoKSBzdHJpbmcgewogIHJldHVybiBNb2R1bGVOYW1lCn0KCi8vIFJlZ2lzdGVyTGVnYWN5QW1pbm9Db2RlYyBwZXJmb3JtcyBhIG5vLW9wLiBUaGUgVGVuZGVybWludCBjbGllbnQgZG9lcyBub3Qgc3VwcG9ydCBhbWluby4KZnVuYyAoQXBwTW9kdWxlQmFzaWMpIFJlZ2lzdGVyTGVnYWN5QW1pbm9Db2RlYygqY29kZWMuTGVnYWN5QW1pbm8pIHt9CgovLyBSZWdpc3RlckludGVyZmFjZXMgcmVnaXN0ZXJzIG1vZHVsZSBjb25jcmV0ZSB0eXBlcyBpbnRvIHByb3RvYnVmIEFueS4gVGhpcyBhbGxvd3MgY29yZSBJQkMKLy8gdG8gdW5tYXJzaGFsIHRlbmRlcm1pbnQgbGlnaHQgY2xpZW50IHR5cGVzLgpmdW5jIChBcHBNb2R1bGVCYXNpYykgUmVnaXN0ZXJJbnRlcmZhY2VzKHJlZ2lzdHJ5IGNvZGVjdHlwZXMuSW50ZXJmYWNlUmVnaXN0cnkpIHsKICBSZWdpc3RlckludGVyZmFjZXMocmVnaXN0cnkpCn0KCi8vIERlZmF1bHRHZW5lc2lzIHBlcmZvcm1zIGEgbm8tb3AuIEdlbmVzaXMgaXMgbm90IHN1cHBvcnRlZCBmb3IgdGhlIHRlbmRlcm1pbnQgbGlnaHQgY2xpZW50LgpmdW5jIChBcHBNb2R1bGVCYXNpYykgRGVmYXVsdEdlbmVzaXMoY2RjIGNvZGVjLkpTT05Db2RlYykganNvbi5SYXdNZXNzYWdlIHsKICByZXR1cm4gbmlsCn0KCi8vIFZhbGlkYXRlR2VuZXNpcyBwZXJmb3JtcyBhIG5vLW9wLiBHZW5lc2lzIGlzIG5vdCBzdXBwb3J0ZWQgZm9yIHRoZSB0ZW5kZXJtaW50IGxpZ2h0IGNpbGVudC4KZnVuYyAoQXBwTW9kdWxlQmFzaWMpIFZhbGlkYXRlR2VuZXNpcyhjZGMgY29kZWMuSlNPTkNvZGVjLCBjb25maWcgY2xpZW50LlR4RW5jb2RpbmdDb25maWcsIGJ6IGpzb24uUmF3TWVzc2FnZSkgZXJyb3IgewogIHJldHVybiBuaWwKfQoKLy8gUmVnaXN0ZXJHUlBDR2F0ZXdheVJvdXRlcyBwZXJmb3JtcyBhIG5vLW9wLgpmdW5jIChBcHBNb2R1bGVCYXNpYykgUmVnaXN0ZXJHUlBDR2F0ZXdheVJvdXRlcyhjbGllbnRDdHggY2xpZW50LkNvbnRleHQsIG11eCAqcnVudGltZS5TZXJ2ZU11eCkge30KCi8vIEdldFR4Q21kIHBlcmZvcm1zIGEgbm8tb3AuIFBsZWFzZSBzZWUgdGhlIDAyLWNsaWVudCBjbGkgY29tbWFuZHMuCmZ1bmMgKEFwcE1vZHVsZUJhc2ljKSBHZXRUeENtZCgpICpjb2JyYS5Db21tYW5kIHsKICByZXR1cm4gbmlsCn0KCi8vIEdldFF1ZXJ5Q21kIHBlcmZvcm1zIGEgbm8tb3AuIFBsZWFzZSBzZWUgdGhlIDAyLWNsaWVudCBjbGkgY29tbWFuZHMuCmZ1bmMgKEFwcE1vZHVsZUJhc2ljKSBHZXRRdWVyeUNtZCgpICpjb2JyYS5Db21tYW5kIHsKICByZXR1cm4gbmlsCn0K"}}),e._v(" "),o("h2",{attrs:{id:"creating-clients"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#creating-clients"}},[e._v("#")]),e._v(" Creating clients")]),e._v(" "),o("p",[e._v("A client is created by executing a new "),o("code",[e._v("MsgCreateClient")]),e._v(" transaction composed with a valid "),o("code",[e._v("ClientState")]),e._v(" and initial "),o("code",[e._v("ConsensusState")]),e._v(" encoded as protobuf "),o("code",[e._v("Any")]),e._v("s.\nGenerally, this is performed by an off-chain process known as an "),o("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/main/spec/relayer/ics-018-relayer-algorithms",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBC relayer"),o("OutboundLink")],1),e._v(" however, this is not a strict requirement.")]),e._v(" "),o("p",[e._v("See below for a list of IBC relayer implementations:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/cosmos/relayer",target:"_blank",rel:"noopener noreferrer"}},[e._v("cosmos/relayer"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/informalsystems/hermes",target:"_blank",rel:"noopener noreferrer"}},[e._v("informalsystems/hermes"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/confio/ts-relayer",target:"_blank",rel:"noopener noreferrer"}},[e._v("confio/ts-relayer"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("Stateless checks are performed within the "),o("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/02-client/types/msgs.go#L48",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("ValidateBasic")]),o("OutboundLink")],1),e._v(" method of "),o("code",[e._v("MsgCreateClient")]),e._v(".")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"Ly8gTXNnQ3JlYXRlQ2xpZW50IGRlZmluZXMgYSBtZXNzYWdlIHRvIGNyZWF0ZSBhbiBJQkMgY2xpZW50Cm1lc3NhZ2UgTXNnQ3JlYXRlQ2xpZW50IHsKICBvcHRpb24gKGdvZ29wcm90by5nb3Byb3RvX2dldHRlcnMpID0gZmFsc2U7CgogIC8vIGxpZ2h0IGNsaWVudCBzdGF0ZQogIGdvb2dsZS5wcm90b2J1Zi5BbnkgY2xpZW50X3N0YXRlID0gMSBbKGdvZ29wcm90by5tb3JldGFncykgPSAmcXVvdDt5YW1sOlwmcXVvdDtjbGllbnRfc3RhdGVcJnF1b3Q7JnF1b3Q7XTsKICAvLyBjb25zZW5zdXMgc3RhdGUgYXNzb2NpYXRlZCB3aXRoIHRoZSBjbGllbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGdpdmVuCiAgLy8gaGVpZ2h0LgogIGdvb2dsZS5wcm90b2J1Zi5BbnkgY29uc2Vuc3VzX3N0YXRlID0gMiBbKGdvZ29wcm90by5tb3JldGFncykgPSAmcXVvdDt5YW1sOlwmcXVvdDtjb25zZW5zdXNfc3RhdGVcJnF1b3Q7JnF1b3Q7XTsKICAvLyBzaWduZXIgYWRkcmVzcwogIHN0cmluZyBzaWduZXIgPSAzOwp9Cg=="}}),e._v(" "),o("p",[e._v("Leveraging protobuf "),o("code",[e._v("Any")]),e._v(" encoding allows core IBC to "),o("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/keeper/msg_server.go#L28-L36",target:"_blank",rel:"noopener noreferrer"}},[e._v("unpack"),o("OutboundLink")],1),e._v(" both the "),o("code",[e._v("ClientState")]),e._v(" and "),o("code",[e._v("ConsensusState")]),e._v(" into their respective interface types registered previously using the light client module's "),o("code",[e._v("RegisterInterfaces")]),e._v(" method.")]),e._v(" "),o("p",[e._v("Within the "),o("code",[e._v("02-client")]),e._v(" submodule, the "),o("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/02-client/keeper/client.go#L30-L32",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("ClientState")]),e._v(" is then initialized"),o("OutboundLink")],1),e._v(" with its own isolated key-value store, namespaced using a unique client identifier.")]),e._v(" "),o("p",[e._v("In order to successfully create an IBC client using a new client type, it "),o("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/02-client/keeper/client.go#L19-L25",target:"_blank",rel:"noopener noreferrer"}},[e._v("must be supported"),o("OutboundLink")],1),e._v(". Light client support in IBC is gated by on-chain governance. The allow list may be updated by submitting a new governance proposal to update the "),o("code",[e._v("02-client")]),e._v(" parameter "),o("code",[e._v("AllowedClients")]),e._v(".")]),e._v(" "),o("p",[e._v("See below for example:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"JXMgdHggZ292IHN1Ym1pdC1wcm9wb3NhbCAmbHQ7cGF0aC90by9wcm9wb3NhbC5qc29uJmd0OyAtLWZyb20gJmx0O2tleV9vcl9hZGRyZXNzJmd0Owo="}}),e._v(" "),o("p",[e._v("where "),o("code",[e._v("proposal.json")]),e._v(" contains:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O3RpdGxlJnF1b3Q7OiAmcXVvdDtJQkMgQ2xpZW50cyBQYXJhbSBDaGFuZ2UmcXVvdDssCiAgJnF1b3Q7c3VtbWFyeSZxdW90OzogJnF1b3Q7VXBkYXRlIGFsbG93ZWQgY2xpZW50cyZxdW90OywKICAmcXVvdDttZXNzYWdlcyZxdW90OzogWwogICAgewogICAgICAmcXVvdDtAdHlwZSZxdW90OzogJnF1b3Q7L2liYy5jb3JlLmNsaWVudC52MS5Nc2dVcGRhdGVQYXJhbXMmcXVvdDssCiAgICAgICZxdW90O2F1dGhvcml0eSZxdW90OzogJnF1b3Q7Y29zbW9zMS4uLiZxdW90OywgLy8gVGhlIGdvdiBtb2R1bGUgYWNjb3VudCBhZGRyZXNzCiAgICAgICZxdW90O3BhcmFtcyZxdW90OzogewogICAgICAgICZxdW90O2FsbG93ZWRfY2xpZW50cyZxdW90OzogWyZxdW90OzA2LXNvbG9tYWNoaW5lJnF1b3Q7LCAmcXVvdDswNy10ZW5kZXJtaW50JnF1b3Q7LCAmcXVvdDsweC1uZXctY2xpZW50JnF1b3Q7XQogICAgICB9CiAgICB9CiAgXSwKICAmcXVvdDttZXRhZGF0YSZxdW90OzogJnF1b3Q7QVE9PSZxdW90OywKICAmcXVvdDtkZXBvc2l0JnF1b3Q7OiAmcXVvdDsxMDBzdGFrZSZxdW90Owp9Cg=="}})],1)}),[],!1,null,null,null);t.default=l.exports}}]);