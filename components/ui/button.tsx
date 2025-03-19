import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "font-medium text-brand-white border border-brand-white/0 rounded-[12px] flex items-center gap-2",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-bl from-brand-blue to-brand-yellow text-brand-white ",

        outline: "bg-brand-text/5 text-brand-text",
      },
      size: {
        default: "px-6 py-[10px] ",
        small: "px-5 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
