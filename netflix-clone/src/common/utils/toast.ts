import { toast } from "sonner";
import { setId } from "@/lib/slices/toask";
import store from "@/lib/store";

interface IToast {
  title: string;
  icon?: "success" | "error" | "warning" | "info";
}

export function showToast({ title, icon = "success" }: IToast) {
  const { toask: toastState } = store.getState()
   
  if (toastState.id) {
    toast.dismiss(toastState.id)
  };

  const toastId = toast[icon](title, {
    position: "top-right",
    className: `text-${icon}`,
  });

  store.dispatch(setId(toastId))
}
