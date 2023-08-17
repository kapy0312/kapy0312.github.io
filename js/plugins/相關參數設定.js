//=============================================================================
// RPG Maker MZ - Alternative Menu Screen
//=============================================================================

//相關參數設定
//------------------------------------------------------------------------------
(() => {

    var _Game_Player_transfer=Game_Player.prototype.performTransfer;
    Game_Player.prototype.performTransfer = function()
    {
        _Game_Player_transfer.call(this);
        $dataWeapons[55].params[2] = 78788;//id:55 武器_參數(攻擊力)
    };
    
})();