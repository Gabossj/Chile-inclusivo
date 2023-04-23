$("#form").validate({

    rules: {
        nombre_completo: {
          required: true,
          solo_letras: true,
          dos_nombres: true
        },
        correo: {
            required: true,
        },
        usuario: {
            required: true,
        },
        contrasena: {
            required: true,
        }
    },

    messages: {
        nombre_completo: {
            required: "Ingresa un nombre",
            dos_nombres: "ingrese nuevamente los datos",
            solo_letras: "ingrese solo letras"
        },
        correo: {
            required:"Ingrese un correo",
        },
        usuario: {
            required:"Ingresa un usuario",
        },
        contrasena: {
            required: "ingrese una contraseña",
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
