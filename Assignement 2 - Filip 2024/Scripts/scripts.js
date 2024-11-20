document.addEventListener('DOMContentLoaded', function() {
        const InputAge = document.getElementById('inputAge')
        const checkboxVip = document.getElementById('checkboxVip')

        function checkEligibility() {
            const age = parseInt(InputAge.value);
            const isVip = checkboxVip.checked

            if (age >= 18 || isVip) {
                    alert('Welcome / Välkommen')
                    console.log("Age Check Success!")
            } else {
                    alert('Access Denied / Åtkomst Nekad')
                    console.log("Age Check Failed")
            }
        }


const checkButton = document.getElementById('enterBtn')
checkButton.innerText = "Check Eligibility";
checkButton.addEventListener('click', checkEligibility)
        // console.log("Button Pressed")  skickar bara direkt, kräver inte att knappen blir tryckt
});