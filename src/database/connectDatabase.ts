import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectionDatabase = async () => {
  try {
    const MONGO_URI = process.env.DATABASE;

    if (!MONGO_URI) {
      throw new Error("💥 Thiếu biến MONGO_URI");
    }

    await mongoose
      .connect(MONGO_URI, { dbName: "learnings" })
      .then(() => console.log("✅ Kết nối thành công database"))
      .catch((error) => {
        console.error("💢 Lỗi nè thằng lờ:", error);
        process.exit(1);
      });
  } catch (error) {
    console.error("💢 Lỗi khởi tạo cơ sở dữ liệu:", error);
    process.exit(1);
  }

  return mongoose.connection;
};

export default connectionDatabase;
