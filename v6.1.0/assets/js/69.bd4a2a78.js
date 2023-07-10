(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{633:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#messages"}},[e._v("#")]),e._v(" Messages")]),e._v(" "),a("h2",{attrs:{id:"msgregisterinterchainaccount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msgregisterinterchainaccount"}},[e._v("#")]),e._v(" "),a("code",[e._v("MsgRegisterInterchainAccount")])]),e._v(" "),a("p",[e._v("An Interchain Accounts channel handshake can be initated using "),a("code",[e._v("MsgRegisterInterchainAccount")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNc2dSZWdpc3RlckludGVyY2hhaW5BY2NvdW50IHN0cnVjdCB7CiAgT3duZXIgICAgICAgIHN0cmluZwogIENvbm5lY3Rpb25JRCBzdHJpbmcKICBWZXJzaW9uICAgICAgc3RyaW5nCn0K"}}),e._v(" "),a("p",[e._v("This message is expected to fail if:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Owner")]),e._v(" is an empty string.")]),e._v(" "),a("li",[a("code",[e._v("ConnectionID")]),e._v(" is invalid (see "),a("a",{attrs:{href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-024-host-requirements/README.md#paths-identifiers-separators",target:"_blank",rel:"noopener noreferrer"}},[e._v("24-host naming requirements"),a("OutboundLink")],1),e._v(").")])]),e._v(" "),a("p",[e._v("This message will construct a new "),a("code",[e._v("MsgChannelOpenInit")]),e._v(" on chain and route it to the core IBC message server to initiate the opening step of the channel handshake.")]),e._v(" "),a("p",[e._v("The controller submodule will generate a new port identifier and claim the associated port capability. The caller is expected to provide an appropriate application version string. For example, this may be an ICS-27 JSON encoded "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v6.0.0-rc0/proto/ibc/applications/interchain_accounts/v1/metadata.proto#L11",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Metadata")]),a("OutboundLink")],1),e._v(" type or an ICS-29 JSON encoded "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v6.0.0-rc0/proto/ibc/applications/fee/v1/metadata.proto#L11",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Metadata")]),a("OutboundLink")],1),e._v(" type with a nested application version.\nIf the "),a("code",[e._v("Version")]),e._v(" string is omitted, the controller submodule will construct a default version string in the "),a("code",[e._v("OnChanOpenInit")]),e._v(" handshake callback.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNc2dSZWdpc3RlckludGVyY2hhaW5BY2NvdW50UmVzcG9uc2Ugc3RydWN0IHsKICBDaGFubmVsSUQgc3RyaW5nCn0K"}}),e._v(" "),a("p",[e._v("The "),a("code",[e._v("ChannelID")]),e._v(" is returned in the message response.")]),e._v(" "),a("h2",{attrs:{id:"msgsendtx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msgsendtx"}},[e._v("#")]),e._v(" "),a("code",[e._v("MsgSendTx")])]),e._v(" "),a("p",[e._v("An Interchain Accounts transaction can be executed on a remote host chain by sending a "),a("code",[e._v("MsgSendTx")]),e._v(" from the corresponding controller chain:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNc2dTZW5kVHggc3RydWN0IHsKICBPd25lciAgICAgICAgICAgc3RyaW5nCiAgQ29ubmVjdGlvbklEICAgIHN0cmluZwogIFBhY2tldERhdGEgICAgICBJbnRlcmNoYWluQWNjb3VudFBhY2tldERhdGEgCiAgUmVsYXRpdmVUaW1lb3V0IHVpbnQ2NAp9Cg=="}}),e._v(" "),a("p",[e._v("This message is expected to fail if:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Owner")]),e._v(" is an empty string.")]),e._v(" "),a("li",[a("code",[e._v("ConnectionID")]),e._v(" is invalid (see "),a("a",{attrs:{href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-024-host-requirements/README.md#paths-identifiers-separators",target:"_blank",rel:"noopener noreferrer"}},[e._v("24-host naming requirements"),a("OutboundLink")],1),e._v(").")]),e._v(" "),a("li",[a("code",[e._v("PacketData")]),e._v(" contains an "),a("code",[e._v("UNSPECIFIED")]),e._v(" type enum, the length of "),a("code",[e._v("Data")]),e._v(" bytes is zero or the "),a("code",[e._v("Memo")]),e._v(" field exceeds 256 characters in length.")]),e._v(" "),a("li",[a("code",[e._v("RelativeTimeout")]),e._v(" is zero.")])]),e._v(" "),a("p",[e._v("This message will create a new IBC packet with the provided "),a("code",[e._v("PacketData")]),e._v(" and send it via the channel associated with the "),a("code",[e._v("Owner")]),e._v(" and "),a("code",[e._v("ConnectionID")]),e._v(".\nThe "),a("code",[e._v("PacketData")]),e._v(" is expected to contain a list of serialized "),a("code",[e._v("[]sdk.Msg")]),e._v(" in the form of "),a("code",[e._v("CosmosTx")]),e._v(". Please note the signer field of each "),a("code",[e._v("sdk.Msg")]),e._v(" must be the interchain account address.\nWhen the packet is relayed to the host chain, the "),a("code",[e._v("PacketData")]),e._v(" is unmarshalled and the messages are authenticated and executed.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNc2dTZW5kVHhSZXNwb25zZSBzdHJ1Y3QgewogIFNlcXVlbmNlIHVpbnQ2NAp9Cg=="}}),e._v(" "),a("p",[e._v("The packet "),a("code",[e._v("Sequence")]),e._v(" is returned in the message response.")]),e._v(" "),a("h2",{attrs:{id:"atomicity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#atomicity"}},[e._v("#")]),e._v(" Atomicity")]),e._v(" "),a("p",[e._v("As the Interchain Accounts module supports the execution of multiple transactions using the Cosmos SDK "),a("code",[e._v("Msg")]),e._v(" interface, it provides the same atomicity guarantees as Cosmos SDK-based applications, leveraging the "),a("a",{attrs:{href:"https://docs.cosmos.network/main/core/store.html#cachemultistore",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("CacheMultiStore")]),a("OutboundLink")],1),e._v(" architecture provided by the "),a("a",{attrs:{href:"https://docs.cosmos.network/main/core/context.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Context")]),a("OutboundLink")],1),e._v(" type.")]),e._v(" "),a("p",[e._v("This provides atomic execution of transactions when using Interchain Accounts, where state changes are only committed if all "),a("code",[e._v("Msg")]),e._v("s succeed.")])],1)}),[],!1,null,null,null);t.default=n.exports}}]);