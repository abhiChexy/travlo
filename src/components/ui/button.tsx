import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-linear-to-b from-gray-700 to-gray-900 border border-gray-800 shadow-lg text-primary-foreground relative hover:after:opacity-5 after:absolute after:inset-0 after:bg-gray-100 after:opacity-0 after:transition-opacity after:pointer-events-none [&>*]:relative [&>*]:z-10 overflow-clip",
        secondary:
          "bg-linear-to-b from-gray-100 to-gray-300 border border-gray-300 shadow-lg text-primary-foreground relative hover:after:opacity-5 after:absolute after:inset-0 after:bg-gray-800 after:opacity-0 after:transition-opacity after:pointer-events-none [&>*]:relative [&>*]:z-10 text-secondary-foreground overflow-clip",
        danger:
          "bg-linear-to-b from-red-600 to-red-800 border border-red-800 shadow-lg text-primary-foreground relative hover:after:opacity-10 after:absolute after:inset-0 after:bg-white after:opacity-0 after:transition-opacity after:pointer-events-none [&>*]:relative [&>*]:z-10 overflow-clip",
        success:
          "bg-linear-to-b from-green-600 to-green-800 border border-green-800 shadow-lg text-primary-foreground relative hover:after:opacity-10 after:absolute after:inset-0 after:bg-white after:opacity-0 after:transition-opacity after:pointer-events-none [&>*]:relative [&>*]:z-10 overflow-clip",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 overflow-clip",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 overflow-clip",
        link: "text-primary underline-offset-4 hover:underline overflow-clip",
      },
      size: {
        default: "h-10 px-6 py-2 has-[>svg]:px-3 text-sm",
        lg: "h-12 px-8 has-[>svg]:px-4 rounded-xl text-base",
        xl: "h-14 px-12 has-[>svg]:px-6 rounded-xl text-lg",
        icon: "size-9",
      },
      rounded: {
        true: "rounded-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: false,
    },
  }
);

function Button({
  className,
  variant,
  size,
  rounded,
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
      className={cn(buttonVariants({ variant, size, rounded, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
