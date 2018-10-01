import * as assert from 'assert';
import { EventEmitter } from 'events';
import * as net from './net';
import { DemoFile } from './demo';
import { ICSVCMsg_UserMessage } from './protobufs/netmessages';
import { ICCSUsrMsg_VGUIMenu, ICCSUsrMsg_Geiger, ICCSUsrMsg_Train, ICCSUsrMsg_HudText, ICCSUsrMsg_SayText, ICCSUsrMsg_SayText2, ICCSUsrMsg_TextMsg, ICCSUsrMsg_HudMsg, ICCSUsrMsg_ResetHud, ICCSUsrMsg_GameTitle, ICCSUsrMsg_Shake, ICCSUsrMsg_Fade, ICCSUsrMsg_Rumble, ICCSUsrMsg_CloseCaption, ICCSUsrMsg_CloseCaptionDirect, ICCSUsrMsg_SendAudio, ICCSUsrMsg_RawAudio, ICCSUsrMsg_VoiceMask, ICCSUsrMsg_RequestState, ICCSUsrMsg_Damage, ICCSUsrMsg_RadioText, ICCSUsrMsg_HintText, ICCSUsrMsg_KeyHintText, ICCSUsrMsg_ProcessSpottedEntityUpdate, ICCSUsrMsg_ReloadEffect, ICCSUsrMsg_AdjustMoney, ICCSUsrMsg_StopSpectatorMode, ICCSUsrMsg_KillCam, ICCSUsrMsg_DesiredTimescale, ICCSUsrMsg_CurrentTimescale, ICCSUsrMsg_AchievementEvent, ICCSUsrMsg_MatchEndConditions, ICCSUsrMsg_DisconnectToLobby, ICCSUsrMsg_PlayerStatsUpdate, ICCSUsrMsg_DisplayInventory, ICCSUsrMsg_WarmupHasEnded, ICCSUsrMsg_ClientInfo, ICCSUsrMsg_XRankGet, ICCSUsrMsg_XRankUpd, ICCSUsrMsg_CallVoteFailed, ICCSUsrMsg_VoteStart, ICCSUsrMsg_VotePass, ICCSUsrMsg_VoteFailed, ICCSUsrMsg_VoteSetup, ICCSUsrMsg_ServerRankRevealAll, ICCSUsrMsg_SendLastKillerDamageToClient, ICCSUsrMsg_ServerRankUpdate, ICCSUsrMsg_ItemPickup, ICCSUsrMsg_ShowMenu, ICCSUsrMsg_BarTime, ICCSUsrMsg_AmmoDenied, ICCSUsrMsg_MarkAchievement, ICCSUsrMsg_MatchStatsUpdate, ICCSUsrMsg_ItemDrop, ICCSUsrMsg_GlowPropTurnOff, ICCSUsrMsg_SendPlayerItemDrops, ICCSUsrMsg_RoundBackupFilenames, ICCSUsrMsg_SendPlayerItemFound, ICCSUsrMsg_ReportHit, ICCSUsrMsg_XpUpdate, ICCSUsrMsg_QuestProgress } from './protobufs/cstrike15_usermessages';

interface IUserMessageEvent {
  name: string;
  msg: any;
}

export declare interface UserMessages {
  on(message: 'message', listener: (event: IUserMessageEvent) => void): this;
  on(message: 'VGUIMenu', listener: (msg: RequiredNonNullable<ICCSUsrMsg_VGUIMenu>) => void): this;
  on(message: 'Geiger', listener: (msg: RequiredNonNullable<ICCSUsrMsg_Geiger>) => void): this;
  on(message: 'Train', listener: (msg: RequiredNonNullable<ICCSUsrMsg_Train>) => void): this;
  on(message: 'HudText', listener: (msg: RequiredNonNullable<ICCSUsrMsg_HudText>) => void): this;
  on(message: 'SayText', listener: (msg: RequiredNonNullable<ICCSUsrMsg_SayText>) => void): this;
  on(message: 'SayText2', listener: (msg: RequiredNonNullable<ICCSUsrMsg_SayText2>) => void): this;
  on(message: 'TextMsg', listener: (msg: RequiredNonNullable<ICCSUsrMsg_TextMsg>) => void): this;
  on(message: 'HudMsg', listener: (msg: RequiredNonNullable<ICCSUsrMsg_HudMsg>) => void): this;
  on(message: 'ResetHud', listener: (msg: RequiredNonNullable<ICCSUsrMsg_ResetHud>) => void): this;
  on(message: 'GameTitle', listener: (msg: RequiredNonNullable<ICCSUsrMsg_GameTitle>) => void): this;
  on(message: 'Shake', listener: (msg: RequiredNonNullable<ICCSUsrMsg_Shake>) => void): this;
  on(message: 'Fade', listener: (msg: RequiredNonNullable<ICCSUsrMsg_Fade>) => void): this;
  on(message: 'Rumble', listener: (msg: RequiredNonNullable<ICCSUsrMsg_Rumble>) => void): this;
  on(message: 'CloseCaption', listener: (msg: RequiredNonNullable<ICCSUsrMsg_CloseCaption>) => void): this;
  on(message: 'CloseCaptionDirect', listener: (msg: RequiredNonNullable<ICCSUsrMsg_CloseCaptionDirect>) => void): this;
  on(message: 'SendAudio', listener: (msg: RequiredNonNullable<ICCSUsrMsg_SendAudio>) => void): this;
  on(message: 'RawAudio', listener: (msg: RequiredNonNullable<ICCSUsrMsg_RawAudio>) => void): this;
  on(message: 'VoiceMask', listener: (msg: RequiredNonNullable<ICCSUsrMsg_VoiceMask>) => void): this;
  on(message: 'RequestState', listener: (msg: RequiredNonNullable<ICCSUsrMsg_RequestState>) => void): this;
  on(message: 'Damage', listener: (msg: RequiredNonNullable<ICCSUsrMsg_Damage>) => void): this;
  on(message: 'RadioText', listener: (msg: RequiredNonNullable<ICCSUsrMsg_RadioText>) => void): this;
  on(message: 'HintText', listener: (msg: RequiredNonNullable<ICCSUsrMsg_HintText>) => void): this;
  on(message: 'KeyHintText', listener: (msg: RequiredNonNullable<ICCSUsrMsg_KeyHintText>) => void): this;
  on(message: 'ProcessSpottedEntityUpdate', listener: (msg: RequiredNonNullable<ICCSUsrMsg_ProcessSpottedEntityUpdate>) => void): this;
  on(message: 'ReloadEffect', listener: (msg: RequiredNonNullable<ICCSUsrMsg_ReloadEffect>) => void): this;
  on(message: 'AdjustMoney', listener: (msg: RequiredNonNullable<ICCSUsrMsg_AdjustMoney>) => void): this;
  on(message: 'StopSpectatorMode', listener: (msg: RequiredNonNullable<ICCSUsrMsg_StopSpectatorMode>) => void): this;
  on(message: 'KillCam', listener: (msg: RequiredNonNullable<ICCSUsrMsg_KillCam>) => void): this;
  on(message: 'DesiredTimescale', listener: (msg: RequiredNonNullable<ICCSUsrMsg_DesiredTimescale>) => void): this;
  on(message: 'CurrentTimescale', listener: (msg: RequiredNonNullable<ICCSUsrMsg_CurrentTimescale>) => void): this;
  on(message: 'AchievementEvent', listener: (msg: RequiredNonNullable<ICCSUsrMsg_AchievementEvent>) => void): this;
  on(message: 'MatchEndConditions', listener: (msg: RequiredNonNullable<ICCSUsrMsg_MatchEndConditions>) => void): this;
  on(message: 'DisconnectToLobby', listener: (msg: RequiredNonNullable<ICCSUsrMsg_DisconnectToLobby>) => void): this;
  on(message: 'PlayerStatsUpdate', listener: (msg: RequiredNonNullable<ICCSUsrMsg_PlayerStatsUpdate>) => void): this;
  on(message: 'DisplayInventory', listener: (msg: RequiredNonNullable<ICCSUsrMsg_DisplayInventory>) => void): this;
  on(message: 'WarmupHasEnded', listener: (msg: RequiredNonNullable<ICCSUsrMsg_WarmupHasEnded>) => void): this;
  on(message: 'ClientInfo', listener: (msg: RequiredNonNullable<ICCSUsrMsg_ClientInfo>) => void): this;
  on(message: 'XRankGet', listener: (msg: RequiredNonNullable<ICCSUsrMsg_XRankGet>) => void): this;
  on(message: 'XRankUpd', listener: (msg: RequiredNonNullable<ICCSUsrMsg_XRankUpd>) => void): this;
  on(message: 'CallVoteFailed', listener: (msg: RequiredNonNullable<ICCSUsrMsg_CallVoteFailed>) => void): this;
  on(message: 'VoteStart', listener: (msg: RequiredNonNullable<ICCSUsrMsg_VoteStart>) => void): this;
  on(message: 'VotePass', listener: (msg: RequiredNonNullable<ICCSUsrMsg_VotePass>) => void): this;
  on(message: 'VoteFailed', listener: (msg: RequiredNonNullable<ICCSUsrMsg_VoteFailed>) => void): this;
  on(message: 'VoteSetup', listener: (msg: RequiredNonNullable<ICCSUsrMsg_VoteSetup>) => void): this;
  on(message: 'ServerRankRevealAll', listener: (msg: RequiredNonNullable<ICCSUsrMsg_ServerRankRevealAll>) => void): this;
  on(message: 'SendLastKillerDamageToClient', listener: (msg: RequiredNonNullable<ICCSUsrMsg_SendLastKillerDamageToClient>) => void): this;
  on(message: 'ServerRankUpdate', listener: (msg: RequiredNonNullable<ICCSUsrMsg_ServerRankUpdate>) => void): this;
  on(message: 'ItemPickup', listener: (msg: RequiredNonNullable<ICCSUsrMsg_ItemPickup>) => void): this;
  on(message: 'ShowMenu', listener: (msg: RequiredNonNullable<ICCSUsrMsg_ShowMenu>) => void): this;
  on(message: 'BarTime', listener: (msg: RequiredNonNullable<ICCSUsrMsg_BarTime>) => void): this;
  on(message: 'AmmoDenied', listener: (msg: RequiredNonNullable<ICCSUsrMsg_AmmoDenied>) => void): this;
  on(message: 'MarkAchievement', listener: (msg: RequiredNonNullable<ICCSUsrMsg_MarkAchievement>) => void): this;
  on(message: 'MatchStatsUpdate', listener: (msg: RequiredNonNullable<ICCSUsrMsg_MatchStatsUpdate>) => void): this;
  on(message: 'ItemDrop', listener: (msg: RequiredNonNullable<ICCSUsrMsg_ItemDrop>) => void): this;
  on(message: 'GlowPropTurnOff', listener: (msg: RequiredNonNullable<ICCSUsrMsg_GlowPropTurnOff>) => void): this;
  on(message: 'SendPlayerItemDrops', listener: (msg: RequiredNonNullable<ICCSUsrMsg_SendPlayerItemDrops>) => void): this;
  on(message: 'RoundBackupFilenames', listener: (msg: RequiredNonNullable<ICCSUsrMsg_RoundBackupFilenames>) => void): this;
  on(message: 'SendPlayerItemFound', listener: (msg: RequiredNonNullable<ICCSUsrMsg_SendPlayerItemFound>) => void): this;
  on(message: 'ReportHit', listener: (msg: RequiredNonNullable<ICCSUsrMsg_ReportHit>) => void): this;
  on(message: 'XpUpdate', listener: (msg: RequiredNonNullable<ICCSUsrMsg_XpUpdate>) => void): this;
  on(message: 'QuestProgress', listener: (msg: RequiredNonNullable<ICCSUsrMsg_QuestProgress>) => void): this;
}

/**
 * Handles user messages for a demo file.
 */
export class UserMessages extends EventEmitter {
  listen(demo: DemoFile) {
    demo.on('svc_UserMessage', this._handleUserMessage.bind(this));
  }

  /**
   * Fired for a specific user message being sent.
   * Note the event has the name of the username (e.g., `SayText2`)
   * @event UserMessages#UserMessageName
   * @type {object}
   */

  /**
   * Fired for a specific user message being sent.
   * @note Fired after specific event is fired.
   *
   * @event UserMessages#message
   * @type {object}
   * @property {string} name - User message name
   * @property {object} msg - User message
   */

  _handleUserMessage(msg: RequiredNonNullable<ICSVCMsg_UserMessage>) {
    var um = net.findUserMessageByType(msg.msgType);
    if (!um) {
      // TODO: warn of unknown user message
      return;
    }

    if (this.listenerCount(um.name) || this.listenerCount('message')) {
      var msgInst = um.class.decode(msg.msgData);
      assert(msgInst, 'unable to decode user message');

      this.emit(um.name, msgInst);

      this.emit('message', {
        name: um.name,
        msg: msgInst
      });
    }
  }
}
