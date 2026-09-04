import { Copy } from "lucide-react"
import { useMemo } from "react"
import { useSearchParams } from "react-router"

import SubscriptionPlanCard from "@/components/Subscription/SubscriptionPlanCard"
import { subscriptionPlans } from "@/data/subscriptionPlans"

const adminFee = 3000

function formatRupiah(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value)
}

function formatDate(value: Date) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(value)
}

export default function PaymentProcessPage() {
  const [searchParams] = useSearchParams()
  const planId = searchParams.get("plan") ?? "individual"
  const paymentMethod = searchParams.get("method") ?? "bca"

  const selectedPlan = useMemo(() => {
    return subscriptionPlans.find((plan) => plan.id === planId) ?? subscriptionPlans[0]
  }, [planId])

  const paymentLabel = paymentMethod === "bca" ? "BCA Virtual Account" : "Kartu Debit / Kredit"
  const paymentCode = paymentMethod === "bca" ? "3KDJ5XFOV" : "CARD-3KDJ5XFOV"
  const totalPayment = selectedPlan.priceValue + adminFee

  return (
    <div className="min-h-screen bg-background-page-header px-4 pb-12 pt-8 text-white md:px-8 lg:px-20 lg:pb-20 lg:pt-10">
      <section className="mx-auto mb-9 flex min-h-[84px] w-full max-w-[1270px] flex-col items-center justify-center rounded-xl bg-background-paper px-5 py-4 text-center">
        <p className="mb-3 text-sm text-white">Lakukan Pembayaran Sebelum</p>
        <div className="flex items-center gap-3 text-xl font-700">
          <span className="rounded bg-background-extra px-4 py-2">00 <span className="text-sm font-400">Jam</span></span>
          <span>:</span>
          <span className="rounded bg-background-extra px-4 py-2">14 <span className="text-sm font-400">Menit</span></span>
          <span>:</span>
          <span className="rounded bg-background-extra px-4 py-2">58 <span className="text-sm font-400">Detik</span></span>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1140px]">
        <h1 className="mb-8 text-2xl font-700 lg:text-[32px]">Ringkasan Pembayaran</h1>

        <div className="grid gap-8 lg:grid-cols-[236px_1fr] lg:gap-14">
          <SubscriptionPlanCard
            compact
            name={selectedPlan.name}
            price={selectedPlan.price}
            account={selectedPlan.account}
            features={selectedPlan.features}
          />

          <div>
            <h2 className="mb-3 text-sm font-700">Metode Pembayaran</h2>
            <div className="mb-5 flex min-h-[40px] items-center gap-2 rounded border border-outline-border px-3 text-sm text-white">
              <span className="h-4 w-4 rounded-full border border-white" />
              {paymentMethod === "bca" ? (
                <span className="rounded-full bg-info-default px-2 py-0.5 text-[10px] font-900 text-white">BCA</span>
              ) : (
                <span className="rounded bg-white px-1.5 py-0.5 text-[10px] font-900 text-primary-main-300">VISA</span>
              )}
              <span>{paymentLabel}</span>
            </div>

            <dl className="mb-6 grid gap-y-3 text-sm md:grid-cols-[180px_1fr]">
              <dt className="text-light-secondary">Tanggal Pembelian</dt>
              <dd className="md:text-right">{formatDate(new Date())}</dd>
              <dt className="text-light-secondary">Kode Pembayaran</dt>
              <dd className="flex items-center gap-2 md:justify-end">
                {paymentCode}
                <button type="button" aria-label="Salin kode pembayaran" className="text-primary-main transition hover:text-primary-main-100">
                  <Copy className="h-4 w-4" />
                </button>
              </dd>
            </dl>

            <h2 className="mb-4 text-sm font-700">Ringkasan Transaksi</h2>
            <dl className="mb-6 grid gap-y-3 text-sm md:grid-cols-[1fr_160px]">
              <dt className="text-light-secondary">Paket Premium {selectedPlan.name}</dt>
              <dd className="md:text-right">{formatRupiah(selectedPlan.priceValue)}</dd>
              <dt className="text-light-secondary">Biaya Admin</dt>
              <dd className="md:text-right">{formatRupiah(adminFee)}</dd>
              <dt className="text-light-secondary">Total Pembayaran</dt>
              <dd className="font-700 md:text-right">{formatRupiah(totalPayment)}</dd>
            </dl>

            <h2 className="mb-4 text-sm font-700">Tata Cara Pembayaran</h2>
            <ol className="mb-7 list-decimal space-y-1 pl-5 text-sm leading-5 text-light-secondary">
              <li>Buka aplikasi BCA Mobile Banking atau akses BCA Internet Banking.</li>
              <li>Login ke akun Anda.</li>
              <li>Pilih menu "Transfer" atau "Pembayaran".</li>
              <li>Pilih opsi "Virtual Account" atau "Virtual Account Number".</li>
              <li>Masukkan nomor virtual account dan jumlah pembayaran, lalu konfirmasikan pembayaran.</li>
            </ol>

            <button
              type="button"
              className="rounded-full bg-primary-main px-7 py-2.5 text-sm font-700 text-white transition hover:bg-primary-main-100"
            >
              Bayar
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
