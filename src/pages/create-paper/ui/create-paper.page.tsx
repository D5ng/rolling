import { CreatePaperForm } from "@/features/create-paper"
import { Header } from "@/widgets"

export default function CreatePaperPage() {
  return (
    <>
      <Header />
      <main className="px-5 desktop:w-[1200px] desktop:mx-auto">
        <section className="pt-12">
          <CreatePaperForm />
        </section>
      </main>
    </>
  )
}
