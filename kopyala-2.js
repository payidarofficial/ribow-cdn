            function kopyala(element) {
                var $temp = $("<input>");
                $("body").append($temp);
                $temp.val($(element).text()).select();
                document.execCommand("copy");
                $temp.remove();

                $('.kopyalandi').css({
                    "transform": "scale(1)",
                    "opacity": "1"
                })

                setTimeout(() => {
                    $('.kopyalandi').css({
                        "transform": "scale(0)",
                        "opacity": "0"
                    })  
                }, 1000)
            }
