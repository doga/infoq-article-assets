import { Qworum } from "https://cdn.skypack.dev/@qworum/qworum-for-web-pages@1.0.9";

const
// Data value builders
JsonValue    = Qworum.Json,
SemanticData = Qworum.SemanticData,
// Instruction builders
Data     = Qworum.Data,
Return   = Qworum.Return,
Sequence = Qworum.Sequence,
Goto     = Qworum.Goto,
Call     = Qworum.Call,
Fault    = Qworum.Fault,
Try      = Qworum.Try,
// Script builder
Script = Qworum.Script;



Script(Sequence(Try(Return(Call(Goto(JsonValue(SemanticData(Fault(Data())))))))))