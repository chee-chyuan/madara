(function() {var implementors = {
"kaioshin_runtime":[["impl TypeInfo for <a class=\"struct\" href=\"kaioshin_runtime/struct.Runtime.html\" title=\"struct kaioshin_runtime::Runtime\">Runtime</a>"],["impl TypeInfo for <a class=\"enum\" href=\"kaioshin_runtime/enum.RuntimeCall.html\" title=\"enum kaioshin_runtime::RuntimeCall\">RuntimeCall</a>"],["impl TypeInfo for <a class=\"enum\" href=\"kaioshin_runtime/enum.RuntimeEvent.html\" title=\"enum kaioshin_runtime::RuntimeEvent\">RuntimeEvent</a>"],["impl TypeInfo for <a class=\"enum\" href=\"kaioshin_runtime/enum.OriginCaller.html\" title=\"enum kaioshin_runtime::OriginCaller\">OriginCaller</a>"],["impl TypeInfo for <a class=\"struct\" href=\"kaioshin_runtime/opaque/struct.SessionKeys.html\" title=\"struct kaioshin_runtime::opaque::SessionKeys\">SessionKeys</a>"]],
"kp_starknet":[["impl TypeInfo for <a class=\"struct\" href=\"kp_starknet/transaction/struct.Transaction.html\" title=\"struct kp_starknet::transaction::Transaction\">Transaction</a>"],["impl&lt;Number, Hash&gt; TypeInfo for <a class=\"struct\" href=\"kp_starknet/block/substrate_extension/header/struct.Header.html\" title=\"struct kp_starknet::block::substrate_extension::header::Header\">Header</a>&lt;Number, Hash&gt;<span class=\"where fmt-newline\">where\n    Hash::Output: TypeInfo + 'static,\n    Number: HasCompact + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;U256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;U256&gt; + TypeInfo + 'static,\n    Hash: HashT + TypeInfo + 'static,</span>"],["impl TypeInfo for <a class=\"struct\" href=\"kp_starknet/transaction/struct.Event.html\" title=\"struct kp_starknet::transaction::Event\">Event</a>"],["impl TypeInfo for <a class=\"struct\" href=\"kp_starknet/block/wrapper/header/struct.Header.html\" title=\"struct kp_starknet::block::wrapper::header::Header\">Header</a>"],["impl TypeInfo for <a class=\"struct\" href=\"kp_starknet/block/wrapper/block/struct.Block.html\" title=\"struct kp_starknet::block::wrapper::block::Block\">Block</a>"]],
"pallet_cairo":[["impl&lt;T&gt; TypeInfo for <a class=\"enum\" href=\"pallet_cairo/pallet/enum.Error.html\" title=\"enum pallet_cairo::pallet::Error\">Error</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;T&gt;: TypeInfo + 'static,\n    T: 'static,</span>"],["impl TypeInfo for <a class=\"struct\" href=\"pallet_cairo/types/struct.CairoAssemblyProgramOutput.html\" title=\"struct pallet_cairo::types::CairoAssemblyProgramOutput\">CairoAssemblyProgramOutput</a>"],["impl&lt;T&gt; TypeInfo for <a class=\"struct\" href=\"pallet_cairo/types/struct.CairoAssemblyProgram.html\" title=\"struct pallet_cairo::types::CairoAssemblyProgram\">CairoAssemblyProgram</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    BoundedVec&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>, T::<a class=\"associatedtype\" href=\"pallet_cairo/pallet/trait.Config.html#associatedtype.MaxCairoAssemblyProgramLength\" title=\"type pallet_cairo::pallet::Config::MaxCairoAssemblyProgramLength\">MaxCairoAssemblyProgramLength</a>&gt;: TypeInfo + 'static,\n    T: <a class=\"trait\" href=\"pallet_cairo/pallet/trait.Config.html\" title=\"trait pallet_cairo::pallet::Config\">Config</a> + 'static,</span>"],["impl TypeInfo for <a class=\"struct\" href=\"pallet_cairo/types/struct.CairoAssemblyProgramInput.html\" title=\"struct pallet_cairo::types::CairoAssemblyProgramInput\">CairoAssemblyProgramInput</a>"],["impl&lt;T&gt; TypeInfo for <a class=\"struct\" href=\"pallet_cairo/types/struct.SierraProgram.html\" title=\"struct pallet_cairo::types::SierraProgram\">SierraProgram</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    BoundedVec&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>, T::<a class=\"associatedtype\" href=\"pallet_cairo/pallet/trait.Config.html#associatedtype.MaxSierraProgramLength\" title=\"type pallet_cairo::pallet::Config::MaxSierraProgramLength\">MaxSierraProgramLength</a>&gt;: TypeInfo + 'static,\n    T::AccountId: TypeInfo + 'static,\n    T: <a class=\"trait\" href=\"pallet_cairo/pallet/trait.Config.html\" title=\"trait pallet_cairo::pallet::Config\">Config</a> + 'static,</span>"],["impl&lt;T&gt; TypeInfo for <a class=\"enum\" href=\"pallet_cairo/pallet/enum.Event.html\" title=\"enum pallet_cairo::pallet::Event\">Event</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T::AccountId: TypeInfo + 'static,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;T&gt;: TypeInfo + 'static,\n    T: <a class=\"trait\" href=\"pallet_cairo/pallet/trait.Config.html\" title=\"trait pallet_cairo::pallet::Config\">Config</a> + 'static,</span>"],["impl&lt;T&gt; TypeInfo for <a class=\"enum\" href=\"pallet_cairo/pallet/enum.Call.html\" title=\"enum pallet_cairo::pallet::Call\">Call</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(T,)</a>&gt;: TypeInfo + 'static,\n    BoundedVec&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>, T::<a class=\"associatedtype\" href=\"pallet_cairo/pallet/trait.Config.html#associatedtype.MaxSierraProgramLength\" title=\"type pallet_cairo::pallet::Config::MaxSierraProgramLength\">MaxSierraProgramLength</a>&gt;: TypeInfo + 'static,\n    BoundedVec&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>, T::<a class=\"associatedtype\" href=\"pallet_cairo/pallet/trait.Config.html#associatedtype.MaxCairoAssemblyProgramLength\" title=\"type pallet_cairo::pallet::Config::MaxCairoAssemblyProgramLength\">MaxCairoAssemblyProgramLength</a>&gt;: TypeInfo + 'static,\n    T: <a class=\"trait\" href=\"pallet_cairo/pallet/trait.Config.html\" title=\"trait pallet_cairo::pallet::Config\">Config</a> + 'static,</span>"]],
"pallet_kaioshin_randomness":[["impl&lt;T&gt; TypeInfo for <a class=\"enum\" href=\"pallet_kaioshin_randomness/pallet/enum.Call.html\" title=\"enum pallet_kaioshin_randomness::pallet::Call\">Call</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(T,)</a>&gt;: TypeInfo + 'static,\n    T: <a class=\"trait\" href=\"pallet_kaioshin_randomness/pallet/trait.Config.html\" title=\"trait pallet_kaioshin_randomness::pallet::Config\">Config</a> + 'static,</span>"]],
"pallet_starknet":[["impl&lt;T&gt; TypeInfo for <a class=\"enum\" href=\"pallet_starknet/pallet/enum.Call.html\" title=\"enum pallet_starknet::pallet::Call\">Call</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(T,)</a>&gt;: TypeInfo + 'static,\n    T: <a class=\"trait\" href=\"pallet_starknet/pallet/trait.Config.html\" title=\"trait pallet_starknet::pallet::Config\">Config</a> + 'static,</span>"],["impl&lt;T&gt; TypeInfo for <a class=\"enum\" href=\"pallet_starknet/pallet/enum.Event.html\" title=\"enum pallet_starknet::pallet::Event\">Event</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;T&gt;: TypeInfo + 'static,\n    T: <a class=\"trait\" href=\"pallet_starknet/pallet/trait.Config.html\" title=\"trait pallet_starknet::pallet::Config\">Config</a> + 'static,</span>"],["impl TypeInfo for <a class=\"enum\" href=\"pallet_starknet/types/enum.RawOrigin.html\" title=\"enum pallet_starknet::types::RawOrigin\">RawOrigin</a>"],["impl&lt;T&gt; TypeInfo for <a class=\"enum\" href=\"pallet_starknet/pallet/enum.Error.html\" title=\"enum pallet_starknet::pallet::Error\">Error</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;T&gt;: TypeInfo + 'static,\n    T: 'static,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()