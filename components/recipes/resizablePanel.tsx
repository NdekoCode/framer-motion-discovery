/* eslint-disable react/prop-types */
"use client";
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { createContext, FC, PropsWithChildren, SVGProps, useContext, useState } from 'react';

import { CheckIcon } from '@heroicons/react/24/solid';

export interface FormProps {
  onSubmit: () => Promise<void>;
  afterSave: () => void;
  className?: string;
}

export interface FormButtonProps extends FormProps {
  children: React.ReactNode;
}
const transition = { type: "ease", ease: "easeInOut", duration: 1 };

export default function ResizablePanel() {
  const [status, setStatus] = useState("idle");

  return (
    <MotionConfig
      transition={{
        duration: 1,
      }}
    >
      <div className="flex min-h-screen flex-col items-start bg-zinc-900 pt-28">
        <div className="mx-auto w-full max-w-md">
          <div className="rounded-2xl border border-zinc-700 bg-zinc-800 overflow-y-hidden">
            <div className="px-8 pt-8">
              <p className="text-lg text-white">Reset password</p>
            </div>
            <motion.div
              initial={false}
              animate={{
                height: status === "idle" || status === "saving" ? 204 : 84,
              }}
            >
              <AnimatePresence mode="sync">
                {status === "idle" || status === "saving" ? (
                  <motion.div
                    key={"saving"}
                    initial={false}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.5,
                    }}
                  >
                    <Form
                      onSubmit={async () => await delay(1000)}
                      afterSave={() => setStatus("success")}
                      className="p-8"
                    >
                      <p className="text-sm text-zinc-400">
                        Enter your email to get a password reset link:
                      </p>
                      <div className="mt-3">
                        <input
                          className="block w-full px-2 py-3 focus:ring ring-offset-1 transition-all focus:ring-indigo-500 outline-none rounded border-none text-slate-900"
                          type="email"
                          required
                          defaultValue="sam@buildui.com"
                          autoComplete="email"
                        />
                      </div>
                      <div className="mt-8 text-right">
                        <FormButton
                          onSubmit={async () => await delay(1000)}
                          afterSave={() => setStatus("success")}
                          className="rounded bg-indigo-500 px-5 py-3 text-sm font-medium text-white"
                        >
                          Email me my link
                        </FormButton>
                      </div>
                    </Form>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{
                      duration: 0.5,
                    }}
                  >
                    <p className="p-8 text-sm text-zinc-400">
                      Email sent! Check your inbox to continue.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          <p className="mt-8 text-sm text-zinc-500">
            <span className="underline">Reach out</span> to us if you need more
            help.
          </p>
        </div>
      </div>
    </MotionConfig>
  );
}
const formContext = createContext<{ status: "idle" | "saving" | "success" }>({
  status: "idle",
});

const Form: FC<PropsWithChildren<FormProps>> = ({
  onSubmit,
  afterSave,
  children,
  ...props
}) => {
  const [status, setStatus] = useState<"idle" | "saving" | "success">("idle");

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setStatus("saving");
    await onSubmit();
    setStatus("success");
    await delay(1250);
    afterSave();
  }

  return (
    <formContext.Provider value={{ status }}>
      <form onSubmit={handleSubmit} {...props}>
        <fieldset disabled={status !== "idle"}>{children}</fieldset>
      </form>
    </formContext.Provider>
  );
};

const FormButton = function FormButton({
  children,
  className,
  ...rest
}: FormButtonProps) {
  const { status } = useContext(formContext);

  const disabled = status !== "idle";

  return (
    <MotionConfig transition={{ ...transition, duration: 0.15 }}>
      <button
        type="submit"
        disabled={disabled}
        className={`${className} relative transition duration-200 ${
          disabled ? "bg-opacity-80" : "hover:bg-opacity-80"
        }`}
        {...rest}
      >
        <AnimatePresence mode="wait">
          {status === "saving" && (
            <motion.div
              key="a"
              initial={false}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex justify-center py-2"
            >
              <Spinner />
            </motion.div>
          )}

          {status === "success" && (
            <motion.div
              key="b"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex justify-center py-2"
            >
              <CheckIcon className="h-full" />
            </motion.div>
          )}
        </AnimatePresence>
        <span className={status === "idle" ? "" : "invisible"}>{children}</span>
      </button>
    </MotionConfig>
  );
};
function Spinner({
  className,
  ...props
}: { className?: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${className} h-full w-auto animate-spin`}
      style={{
        animationTimingFunction: "steps(8, end)",
        animationDuration: ".75s",
      }}
      {...props}
    >
      <rect
        style={{ opacity: 0.4 }}
        x={11}
        y={2}
        width={2}
        height={6}
        rx={1}
        fill="currentColor"
      />
      <rect
        style={{ opacity: 0.4 }}
        x={18.364}
        y={4.22183}
        width={2}
        height={6}
        rx={1}
        transform="rotate(45 18.364 4.222)"
        fill="currentColor"
      />
      <rect
        x={22}
        y={11}
        width={2}
        style={{ opacity: 0.4 }}
        height={6}
        rx={1}
        transform="rotate(90 22 11)"
        fill="currentColor"
      />
      <rect
        x={19.7782}
        y={18.364}
        width={2}
        style={{ opacity: 0.4 }}
        height={6}
        rx={1}
        transform="rotate(135 19.778 18.364)"
        fill="currentColor"
      />
      <rect
        x={13}
        y={22}
        width={2}
        style={{ opacity: 0.4 }}
        height={6}
        rx={1}
        transform="rotate(-180 13 22)"
        fill="currentColor"
      />
      <rect
        x={5.63603}
        y={19.7782}
        width={2}
        style={{ opacity: 0.6 }}
        height={6}
        rx={1}
        transform="rotate(-135 5.636 19.778)"
        fill="currentColor"
      />
      <rect
        x={2}
        y={13}
        width={2}
        style={{ opacity: 0.8 }}
        height={6}
        rx={1}
        transform="rotate(-90 2 13)"
        fill="currentColor"
      />
      <rect
        x={4.22183}
        y={5.63603}
        width={2}
        height={6}
        rx={1}
        transform="rotate(-45 4.222 5.636)"
        fill="currentColor"
      />
    </svg>
  );
}
async function delay(ms: number | undefined) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}
