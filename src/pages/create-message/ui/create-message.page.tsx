import { CreateMessageForm } from "@/features/message/create-message"
import { Header } from "@/widgets"

export default function CreateMessagePage() {
  return (
    <>
      <Header />
      <main className="px-5 tablet:w-[720px] desktop:mx-auto">
        <section className="pt-12">
          <CreateMessageForm />
        </section>
      </main>
    </>
  )
}
