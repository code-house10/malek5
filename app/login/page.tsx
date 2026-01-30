"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@local.dev");
  const [password, setPassword] = useState("Admin@12345");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  return (
    <div className="min-h-screen grid place-items-center p-6">
      <div className="w-full max-w-md rounded-2xl border p-6 shadow-sm">
        <h1 className="text-xl font-semibold">تسجيل الدخول</h1>
        <p className="text-sm opacity-70 mt-1">ادخل بيانات لوحة التحكم</p>

        <div className="mt-6 grid gap-3">
          <input
            className="w-full rounded-xl border px-3 py-2"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          <input
            className="w-full rounded-xl border px-3 py-2"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />

          {err ? <p className="text-sm text-red-600">{err}</p> : null}

          <button
            className="rounded-xl bg-black text-white py-2 disabled:opacity-60"
            disabled={loading}
            onClick={async () => {
              setLoading(true);
              setErr(null);
              const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
              });
              setLoading(false);

              if (res?.ok) router.push("/admin");
              else setErr("بيانات الدخول غير صحيحة");
            }}
          >
            {loading ? "جاري الدخول..." : "دخول"}
          </button>
        </div>
      </div>
    </div>
  );
}
