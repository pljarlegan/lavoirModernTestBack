const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  "use strict";
  res.send("test3 routes GET");
});

router.post("/", (req, res) => {
  "use strict";

  const matrix = req.body.matrix,
    pos = { x: 0, y: 0 },
    isMoveAvailable = (movePosition, inputMatrix) => {
      try {
        inputMatrix[ movePosition.y ][ movePosition.x ];
      } catch(e) {
        return false;
      }
      return true;
    },
    getBestMove = (currentPosition, inputMatrix) => {
      const right = { x: currentPosition.x + 1, y: currentPosition.y },
        down = { x: currentPosition.x, y: currentPosition.y + 1 };

      let rightMoveValue, downMoveValue;

      if (isMoveAvailable(right, inputMatrix)) {
        rightMoveValue = inputMatrix[ right.y ][ right.x ];
      }
      if (isMoveAvailable(down, inputMatrix)) {
        downMoveValue = inputMatrix[ down.y ][ down.x ];
      }

      if (rightMoveValue === undefined && downMoveValue === undefined) {
        return undefined;
      }
      if (rightMoveValue === undefined) {
        return { x: currentPosition.x, y: currentPosition.y + 1 };
      }
      if (downMoveValue === undefined) {
        return { x: currentPosition.x + 1, y: currentPosition.y };
      }

      if (rightMoveValue > downMoveValue) {
        return { x: currentPosition.x + 1, y: currentPosition.y };
      }
      return { x: currentPosition.x, y: currentPosition.y + 1 };
    },

    calcPath = (currentPosition, inputMatrix, result) => {
      const newPos = getBestMove(currentPosition, inputMatrix);
      if (newPos === undefined) {
        return result;
      }
      return calcPath(newPos, inputMatrix, result + inputMatrix[ newPos.y ][ newPos.x ]);
    };

  res.json(calcPath(pos, matrix, matrix[ pos.y ][ pos.x ]));
});


module.exports = router;
