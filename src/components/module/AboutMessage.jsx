import Swal from 'sweetalert2';

const AboutMessage = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-start',
    iconColor: '#FBCB07',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

Toast.fire({
    icon: 'error',
    title: 'کاربر گرامی این بخش به زودی راه اندازی می شود',
    customClass: {
      popup: 'colored-toast',
    },
  })
}

export default AboutMessage;