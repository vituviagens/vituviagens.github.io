$(document).ready(function() {
    $('#form-comecar').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
                /*nome: {
                    validators: {
                            stringLength: {
                            min: 2,
                        },
                            notEmpty: {
                            message: 'Por favor, preencha com seu nome.'
                        }
                    }
                },*/
                email: {
                    validators: {
                        notEmpty: {
                            message: 'Por favor, preencha com seu e-mail.'
                        },
                        emailAddress: {
                            message: 'Por favor, preencha com um e-mail válido.'
                        }
                    }
                }/*,
                idade: {
                    validators: {
                        notEmpty: {
                            message: 'Por favor, selecione o item referente à sua idade.'
                        }
                    }
                },
                hospedagem: {
                    validators: {
                        notEmpty: {
                            message: 'Por favor, selecione o item referente à sua hospedagem.'
                        }
                    }
                },
                voceViajara: {
                    validators: {
                        notEmpty: {
                            message: 'Por favor, selecione o item referente à(s) sua(s) companhia(s) de viagem.'
                        }
                    }
                },
                podeFazer: {
                    validators: {
                        notEmpty: {
                            message: 'Por favor, selecione como podemos te ajudar (sem compromisso).'
                        }
                    }
                }*/
            }
        })
        .on('success.form.bv', function(e) {
            alert("submit");
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#form-comecar').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                alert("post");
                console.log(result);
            }, 'json');
        });
});