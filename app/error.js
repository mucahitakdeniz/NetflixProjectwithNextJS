"use client"; //! Error components must be Client Components

import { useEffect } from "react";

//? aplikasyonun herhangi bir yerinde hata fırlatıldığında otomatik error.js dosyası render edilir
export default function Error({ error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mt-64 text-center">
      <h1 className="text-red-600 text-2xl">Something went wrong</h1>
    </div>
  );
}
