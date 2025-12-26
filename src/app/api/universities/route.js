
// import { NextResponse } from "next/server";
// import { db } from "../../../../lib/db";

// export async function GET(req) {
//   // try {
//     const { searchParams } = new URL(req.url);

//     const country = searchParams.get("country");
//     const degree = searchParams.get("degree");

//     if (!country || !degree) {
//       return NextResponse.json([], { status: 200 });
//     }

//     const [rows] = await db.query(
//       "SELECT * FROM universities WHERE country = ? AND degree_level = ?",
//       [country, degree]
//     );

//     return NextResponse.json(rows);
//   } catch (error) {
//     console.error("API ERROR", error);
//     return NextResponse.json(
//       { error: "Server Error" },
//       { status: 500 }
//     );
//   }
// }
