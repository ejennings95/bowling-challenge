function Game() {
  this._totalPoints = 0;
  this._frameCount = 0;
  this._ballNumber = 1;
  this._scorecard = [];
}

Game.prototype.showTotalPoints = function () {
  return this._totalPoints;
};

Game.prototype.showFrameCount = function () {
  return this._frameCount;
};

Game.prototype.showBallNumber = function () {
  return this._ballNumber;
};

Game.prototype.showScorecard= function () {
  return this._scorecard;
};

Game.prototype.inputBallValue= function (value) {
  if (this.showBallNumber() == 1){
    this.inputFrameToScorecard(new Frame());
  };
};

Game.prototype.inputFrameToScorecard = function (frame) {
  this._scorecard.push(frame);
};