interface FAQ {
    id: number;
    title: string;
    description: string;
  }
  
  const faqs: FAQ[] = [
    {
      id: 1,
      title: "¿Qué es una rifa?",
      description: "Una rifa es una forma de sorteo en la que se venden boletos para participar en un concurso con la oportunidad de ganar premios. Los boletos se pueden comprar a través de nuestra plataforma, y cada boleto adquirido incrementa tus posibilidades de ganar. Una vez que el periodo de venta de boletos termina, se realiza el sorteo para determinar los ganadores. Nuestra plataforma facilita la compra de rifas y la participación en sorteos emocionantes con un proceso simple y seguro.",
    },
    {
      id: 2,
      title: "¿Cómo puedo comprar boletos para una rifa?",
      description: "Para comprar boletos para una rifa, visita nuestra plataforma y explora las rifas disponibles. Selecciona la rifa en la que deseas participar y completa el formulario de compra de boletos con tu información personal y detalles de pago. Una vez que se confirme tu pago, recibirás un correo electrónico con el número de tu boleto y la fecha del sorteo. También puedes verificar el estado de tus boletos y los detalles del sorteo desde tu cuenta en nuestra plataforma.",
    },
    {
      id: 3,
      title: "¿Cómo se realizan los sorteos?",
      description: "Los sorteos se realizan de manera transparente y justa utilizando un sistema automatizado. Una vez que finaliza la venta de boletos, se lleva a cabo el sorteo en la fecha programada. Los números de los boletos se seleccionan al azar, y los ganadores se determinan en base a los números seleccionados. Los resultados del sorteo se publican en nuestra plataforma y se envían por correo electrónico a los ganadores junto con los detalles sobre cómo reclamar sus premios.",
    },
    {
      id: 4,
      title: "¿Puedo participar en rifas desde mi dispositivo móvil?",
      description: "Sí, nuestra plataforma es accesible desde dispositivos móviles, lo que te permite participar en rifas y comprar boletos de manera cómoda desde tu teléfono o tablet. Simplemente accede a nuestro sitio web desde el navegador de tu dispositivo móvil y explora las rifas disponibles. La experiencia de compra y participación está optimizada para ofrecerte una navegación fluida y segura en cualquier dispositivo que utilices.",
    },
  ];
  
  export default faqs;
  