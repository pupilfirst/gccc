import Head from "next/head";
import { Widget } from "@typeform/embed-react";
export default function Faculty() {
  return (
    <div>
      <Head>
        <title>Global Digital Corps- Software Engineering Fellowship</title>
      </Head>
      <main className="bg-gray-900 h-screen">
        <Widget
          id="Zer8VkrH"
          style={{ width: "100%", height: "100%" }}
          className="my-form"
        />
      </main>
    </div>
  );
}
