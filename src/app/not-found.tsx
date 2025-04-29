// app/not-found.tsx

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-2xl font-semibold text-gray-800 mb-2">
        Página não encontrada
      </p>
      <p className="text-gray-600 mb-6">
        A página que você está procurando pode ter sido removida ou nunca
        existiu.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-gray-500 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Voltar para o início
      </Link>
    </div>
  );
}
