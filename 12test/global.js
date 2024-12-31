//parameters
const verticesSamplingNum = 50;
const canvasWidth = 1600;
const canvasHeight = 1200;
const parallelScanSamplingDistance = 10;
const numOfVerticalLines = 10;
const numOfHorizontalLines = 10;
let vertices;

//UI State definitions
const UserFlowState = {
  WAITING_FOR_UPLOAD : "upload",
  WAITING_FOR_LINE_A_POINT_A : "aa",
  WAITING_FOR_LINE_A_POINT_B : "ab",
  WAITING_FOR_LINE_B_POINT_A : "ba",
  WAITING_FOR_LINE_B_POINT_B : "bb",
  WAITING_FOR_EXE : "exe"
}

const selectionTriggerDistance = 10;

// 监听文件上传

let userFlowState = UserFlowState.WAITING_FOR_UPLOAD;
const instruction = document.getElementById("instruction");
const svgOutput = document.getElementById("output");