$("#form").validate({

    rules: {
        nombreCompleto: {
          required: true,
          solo_letras: true,
          dos_nombres: true
        },
        correo: {
            required: true,
        },
        asunto: {
            required:true,
        },
        mensaje: {
            required: true
        }

    },

    messages: {
        nombreCompleto: {
            required: "Ingresa un nombre",
            dos_nombres: "Por favor, ingrese nuevamente los datos",
            solo_letras: "Por favor, ingrese solo letras"
        },
        correo: {
            required:"Ingrese un correo",
        },
        asunto:{
            required: "Ingrese un asunto",
        },
        mensaje: {
            required: "Ingrese un mensaje"
        }
    },

    submitHandler: function(form) {
      form.submit();
      alert("Se ha contactado exitosamente");
    }
});

jQuery.validator.addMethod("dos_nombres", function(value, element) {
    return /\s/.test(value);
  }, "nombre y apellido");

jQuery.validator.addMethod("solo_letras", function(value, element) {
    return /[a-z]/.test(value);
},  "solo letras");
