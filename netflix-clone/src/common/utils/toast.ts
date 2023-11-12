import Swal from "sweetalert2";

interface IToast {
  title: string;
  icon?: "success" | "error" | "warning" | "info";
}

export function showToast({ title, icon = "success" }: IToast) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: false,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  Toast.fire({
    icon,
    title: title,
  });
}
