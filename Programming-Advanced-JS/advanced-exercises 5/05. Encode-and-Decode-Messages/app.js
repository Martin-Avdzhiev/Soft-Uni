function encodeAndDecodeMessages() {
    const sender = document.querySelectorAll('textarea')[0];
    const receiver = document.querySelectorAll('textarea')[1];
    const encode = document.querySelectorAll('button')[0];
    const decode = document.querySelectorAll('button')[1];

    encode.addEventListener('click', encoded);
    decode.addEventListener('click', decoded);


    function encoded() {

        for (let i = 0; i < sender.value.length; i++) {
            const currentAsciiCode = Number(sender.value[i].charCodeAt());
            const newAsciiCode = currentAsciiCode + 1;
            const newLetter = String.fromCharCode(newAsciiCode);
            const firstPart = sender.value.slice(0, i);
            const secondPart = sender.value.slice(i + 1);
            sender.value = firstPart + newLetter + secondPart;
        }
        receiver.value = sender.value;
        sender.value = '';
        sender.disabled = true;
        receiver.disabled = false;
    }

    function decoded() {
        for (let i = 0; i < receiver.value.length; i++) {
            const currentAsciiCode = Number(receiver.value[i].charCodeAt());
            const newAsciiCode = currentAsciiCode - 1;
            const newLetter = String.fromCharCode(newAsciiCode);
            const firstPart = receiver.value.slice(0, i);
            const secondPart = receiver.value.slice(i + 1);
            receiver.value = firstPart + newLetter + secondPart;
        }
        sender.value = receiver.value;
        receiver.value = '';
        sender.disabled = false;
        receiver.disabled = true;
    }
}