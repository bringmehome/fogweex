<template>
  <scroller>
    <text class="txt">One text left , the other right</text>
    <div style="flex-direction:row;justify-content:space-between;">
       <text style="font-size:32">Left</text>
       <text style="font-size:32">Right</text>
    </div>
    <div style="flex-direction:row;justify-content:space-between;">
       <text style="font-size:32">Left</text>
       <div style="flex-direction:row;align-items:flex-end"><text style="font-size:32">Right 2016</text><text style="margin-left:3;color:#00f">2016</text></div>
    </div>
  </scroller>
</template>

<style>
  .txt {
    margin-bottom: 12;
    font-size: 40;
    background-color:#000;
    padding:50;
    color:#fff;
  }
</style>