import mongoose from "mongoose";
import config from "config";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    console.log("Conectado ao MongoDB");
  } catch (e) {
    console.log("Não foi possível conectar ao MongoDB");
    console.log(`Error: ${e}`);
  }
}
export default connect;