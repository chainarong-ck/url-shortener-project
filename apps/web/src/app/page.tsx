import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  const features = [
    {
      title: "ลิงก์สั้นจำง่าย",
      description:
        "สร้าง short link ที่อ่านง่าย ใช้ชื่อภาษาอังกฤษสั้น ๆ หรือ slug ตามแคมเปญได้ทันที",
    },
    {
      title: "ติดตามทุกคลิก",
      description:
        "ดูจำนวนคลิก แหล่งที่มา และช่วงเวลาที่ลิงก์ถูกใช้งาน เพื่อวัดผลได้ชัดเจนขึ้น",
    },
    {
      title: "เหมาะกับทุกคน",
      description:
        "ออกแบบสำหรับงานขาย คอนเทนต์ และโซเชียล ใช้งานง่าย ไม่ต้องตั้งค่าซับซ้อน",
    },
  ];

  const stats = [
    { value: "10K+", label: "ลิงก์ที่พร้อมสร้างต่อวัน" },
    { value: "99.9%", label: "ความพร้อมใช้งานของ redirect" },
    { value: "< 1s", label: "เวลาเฉลี่ยในการ redirect" },
  ];

  return (
    <main className="relative flex-1 overflow-hidden">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-6 sm:px-10 lg:px-12">
        <header className="flex flex-col gap-4 rounded-[30px] border border-line bg-surface px-4 py-4 shadow-[0_16px_42px_rgba(15,23,42,0.08)] backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white shadow-[0_12px_28px_color-mix(in_srgb,var(--brand)_38%,transparent)]">
              st
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-muted">
                URL shortener
              </p>
              <h1 className="text-lg font-semibold tracking-tight">shortthai</h1>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
            <a href="#features" className="transition hover:text-foreground">
              ฟีเจอร์
            </a>
            <a href="#preview" className="transition hover:text-foreground">
              ตัวอย่าง
            </a>
            <a href="#stats" className="transition hover:text-foreground">
              สถิติ
            </a>
          </nav>
          <div className="self-start sm:self-auto">
            <ThemeToggle />
          </div>
        </header>

        <section className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface-strong px-4 py-2 text-sm text-brand-strong shadow-sm">
              <span className="h-2 w-2 rounded-full bg-brand" />
              พร้อมสำหรับแคมเปญ, social bio และลิงก์ขายของ
            </div>
            <h2 className="max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-foreground sm:text-6xl sm:leading-[1.04] lg:text-7xl">
              เปลี่ยนลิงก์ยาวให้สั้น และพร้อมใช้งานในไม่กี่นาที
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              shortthai ช่วยสร้างลิงก์สั้นที่ดูน่าเชื่อถือ แชร์ง่าย และติดตามผลได้ทันที
              เหมาะกับ บุคคลทั่วไป ธุรกิจ ร้านค้า และทีมการตลาดที่ต้องการความเร็วในการปล่อยแคมเปญ
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#preview"
                className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-medium text-white shadow-[0_16px_40px_color-mix(in_srgb,var(--brand)_26%,transparent)] transition hover:bg-brand-strong"
              >
                ดูตัวอย่างหน้าใช้งาน
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-line bg-surface-strong px-6 py-3 text-sm font-medium text-foreground transition hover:bg-background/90"
              >
                สำรวจฟีเจอร์
              </a>
            </div>

            <div
              id="stats"
              className="mt-10 grid gap-3 sm:grid-cols-3"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[28px] border border-line bg-surface px-5 py-5 shadow-[0_14px_40px_rgba(15,23,42,0.06)] backdrop-blur"
                >
                  <p className="text-2xl font-semibold tracking-tight">{stat.value}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            id="preview"
            className="relative rounded-4xl border border-line bg-[linear-gradient(160deg,#0b2530_0%,#103642_52%,#0c1c28_100%)] p-4 text-white shadow-[0_28px_90px_rgba(8,17,27,0.26)] sm:p-6"
          >
            <div className="absolute inset-x-10 top-0 h-24 rounded-b-full bg-[radial-gradient(circle,rgba(45,212,191,0.34),transparent_72%)] blur-2xl" />
            <div className="relative rounded-[28px] border border-white/10 bg-white/8 p-5 backdrop-blur sm:p-6">
              <div className="flex items-center justify-between text-sm text-white/70">
                <span>Shorten URL</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/78">
                  shortthai.live/demo
                </span>
              </div>

              <div className="mt-5 rounded-3xl bg-surface-strong p-4 text-foreground sm:p-5">
                <label className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
                  Original URL
                </label>
                <div className="mt-2 rounded-2xl border border-line bg-background/50 px-4 py-4 text-sm leading-7 text-muted">
                  https://myshop.co.th/campaign/summer-sale-2026?utm_source=tiktok
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_auto]">
                  <div>
                    <label className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
                      Custom slug
                    </label>
                    <div className="mt-2 rounded-2xl border border-line bg-background/35 px-4 py-4 text-sm text-muted">
                      summerdeal
                    </div>
                  </div>
                  <div className="flex items-end">
                    <button className="w-full rounded-2xl bg-brand px-5 py-4 text-sm font-medium text-white shadow-[0_14px_36px_color-mix(in_srgb,var(--brand)_28%,transparent)] transition hover:bg-brand-strong sm:w-auto">
                      สร้างลิงก์สั้น
                    </button>
                  </div>
                </div>

                <div className="mt-5 rounded-3xl border border-brand/15 bg-[linear-gradient(135deg,color-mix(in_srgb,var(--brand-soft)_85%,white)_0%,color-mix(in_srgb,var(--accent-soft)_100%,white)_100%)] p-4">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-brand-strong">
                    ผลลัพธ์
                  </p>
                  <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-lg font-semibold tracking-tight text-foreground">
                      shortthai.live/summerdeal
                    </p>
                    <span className="inline-flex w-fit rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-brand-strong">
                      พร้อมแชร์ทันที
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/8 bg-white/8 px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/55">
                    Clicks
                  </p>
                  <p className="mt-2 text-2xl font-semibold">2,481</p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/8 px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/55">
                    Top source
                  </p>
                  <p className="mt-2 text-2xl font-semibold">TikTok</p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/8 px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/55">
                    Status
                  </p>
                  <p className="mt-2 text-2xl font-semibold">Active</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="grid gap-4 pb-10 md:grid-cols-3"
        >
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[30px] border border-line bg-surface px-6 py-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)]"
            >
              <div className="mb-4 h-12 w-12 rounded-2xl bg-[linear-gradient(135deg,var(--brand),var(--accent))]" />
              <h3 className="text-xl font-semibold tracking-tight">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                {feature.description}
              </p>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
