// import React, { useEffect } from 'react';
// // import { Payment, initMercadoPago,Wallet } from '@mercadopago/sdk-react';
// import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'


// initMercadoPago('YOUR_PUBLIC_KEY',{
//   locale:'es-AR'
// });

// <Wallet initialization={{ preferenceId: '<PREFERENCE_ID>' }} customization={{ texts:{ valueProp: 'smart_option'}}} />

































// const MercadoPagoBrick = () => {
//   useEffect(() => {
//     // Inicialización del SDK de Mercado Pago
//     initMercadoPago('TEST-27f8d5ce-8354-4861-a9a8-3be6e919823c');
//   }, []);

//   // Función de callback llamada al hacer clic en el botón de enviar datos
//   const onSubmit = async ({ selectedPaymentMethod, formData }) => {
//     try {
//       const response = await fetch("/process_payment", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.json();
//       // Manejar el resultado del pago
//     } catch (error) {
//       // Manejar errores al intentar crear el pago
//     }
//   };

//   // Función de callback llamada cuando el Brick está listo
//   const onReady = async () => {
//     // Ocultar cargamentos del sitio, por ejemplo
//   };

//   // Función de callback llamada para todos los casos de error de Brick
//   const onError = async (error) => {
//     console.log(error);
//   };

//   // Configuración de inicio del Brick de pago
//   const initialization = {
//     amount: 100, // Definir el monto del pago
//     preferenceId: "<PREFERENCE_ID>", // Reemplazar con el ID de la preferencia creada en Mercado Pago
//   };

//   // Configuración de personalización del Brick de pago
//   const customization = {
//     paymentMethods: {
//       ticket: "all",
//       creditCard: "all",
//       debitCard: "all",
//       mercadoPago: "all",
//     },
//   };

//   return (
//     <Payment
//       initialization={initialization}
//       customization={customization}
//       onSubmit={onSubmit}
//       onReady={onReady}
//       onError={onError}
//     />
//   );
// };

// export default MercadoPagoBrick;





// TEST-27f8d5ce-8354-4861-a9a8-3be6e919823c