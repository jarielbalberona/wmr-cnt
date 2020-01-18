/**
 *
 * Platoons
 *
 */

import React, { memo } from 'react';
import Squads from '../Squads';
import '../styles.scss';

function Platoons({
  platoons,
  onAddPlatoonSquadGroup,
  onAddPlatoonSquadTeamGroup,
  onAddSquadTeamGroup,
  onDeletePlatoonGroup,
  onDeletePlatoonSquadGroup,
  onDeletePlatoonSquadTeamGroup,
  onChangeInputPlatoonSquad,
  onChangeInputPlatoonSquadName,
  onChangeInputPlatoonSquadTeamName,
  editable,
}) {
  return (
    <div id="Platoons" className="columns is-multiline">
      {platoons.map((platoon, key) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={key} className="column is-half">
          <div className="box has-background-primary">
            <div className="title is-size-7 has-text-white has-text-weight-light container-title">
              Platoon
            </div>
            {editable ? (
              <>
                <div className="group-actions">
                  <button
                    type="button"
                    className="button is-primary has-text-black"
                    onClick={() => onDeletePlatoonGroup(key)}
                  >
                    <span className="icon is-small is-right has-text-white">
                      <i className="fas fa-trash"></i>
                    </span>
                  </button>
                </div>
                <div className="field">
                  <p className="control has-icons-right has-background-primary">
                    <input
                      className="input"
                      type="text"
                      placeholder="Platoon Name"
                      name="name"
                      value={platoon.name}
                      onChange={evt =>
                        onChangeInputPlatoonSquad(
                          'platoons',
                          key,
                          evt.currentTarget.name,
                          evt.currentTarget.value,
                        )
                      }
                      required
                    />
                    <span className="icon is-small is-right">
                      <i className="fas fa-pen"></i>
                    </span>
                  </p>
                </div>
              </>
            ) : (
              <div className="title is-6 has-text-white">
                <p>{platoon.name}</p>
              </div>
            )}
            <Squads
              squads={platoon.squads}
              index={key}
              onAddPlatoonSquadGroup={onAddPlatoonSquadGroup}
              onAddPlatoonSquadTeamGroup={onAddPlatoonSquadTeamGroup}
              onAddSquadTeamGroup={onAddSquadTeamGroup}
              onDeletePlatoonSquadGroup={onDeletePlatoonSquadGroup}
              onDeletePlatoonSquadTeamGroup={onDeletePlatoonSquadTeamGroup}
              onChangeInputPlatoonSquadName={onChangeInputPlatoonSquadName}
              onChangeInputPlatoonSquadTeamName={
                onChangeInputPlatoonSquadTeamName
              }
              editable={editable}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default memo(Platoons);
