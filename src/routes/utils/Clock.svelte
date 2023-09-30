<script>
// @ts-nocheck

    $: time = `${formatAMPM(new Date())}`;

    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
    
    export let fontSize;
    export let top;
</script>

<div class="time black" style='font-size: {fontSize}; margin-top: {top}'>
    {time}
</div>

<style>
    .time {
        display: flex;
        font-weight: 300;
    }
</style>