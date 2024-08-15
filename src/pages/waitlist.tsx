import { useState } from "react";
import { Input } from "../components";

export default function Waitlist() {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <main>
      <section className="flex flex-col items-center justify-center min-h-[100dvh]">
        <h3 className="text-dark text-[60px] font-bold leading-[65.92px] ">
          Be the First to <span className="text-primary">know</span>
        </h3>
        <p className="text-dark-100 text-[25px] leading-[38px] text-center max-w-[840px] font-normal ">
          Join our waitlist and get exclusive early access to our upcoming
          features and updates.
        </p>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <Input />
          </fieldset>
        </form>
      </section>
    </main>
  );
}
