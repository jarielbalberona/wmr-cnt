/**
 *
 * Squads
 *
 */

import React, { memo } from 'react';
import Teams from '../Teams';
import '../styles.scss';

function Squads({
  index,
  squads,
  onAddPlatoonSquadGroup,
  onAddPlatoonSquadTeamGroup,
  onAddSquadTeamGroup,
  onDeleteSquadGroup,
  onDeletePlatoonSquadGroup,
  onDeletePlatoonSquadTeamGroup,
  onDeleteSquadTeamGroup,
  onChangeInputPlatoonSquad,
  onChangeInputPlatoonSquadName,
  onChangeInputPlatoonSquadTeamName,
  onChangeInputSquadTeamName,
  editable,
  is_parent,
}) {
  return (
    <>
      {editable && !is_parent ? (
        <div className="field">
          <div className="control">
            <button
              type="button"
              className="button is-small"
              onClick={() => onAddPlatoonSquadGroup(index)}
            >
              + Squad
            </button>
          </div>
        </div>
      ) : (
        ''
      )}
      <div id="Squads" className="columns is-multiline">
        {squads &&
          squads.length !== 0 &&
          squads.map((squad, s_index) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={s_index}
              className="column is-half"
            >
              <div className="box has-background-white">
                <div className="title is-size-7 has-text-weight-light container-title">
                  Squad
                </div>
                {editable ? (
                  <div className="group-actions">
                    <button
                      type="button"
                      className="button"
                      onClick={() =>
                        index !== undefined
                          ? onDeletePlatoonSquadGroup(index, s_index)
                          : onDeleteSquadGroup(s_index)
                      }
                    >
                      <span className="icon is-small is-right has-text-primary">
                        <i className="fas fa-trash"></i>
                      </span>
                    </button>
                  </div>
                ) : (
                  <></>
                )}

                {editable ? (
                  <div className="field">
                    <p className="control has-icons-right">
                      <input
                        className="input"
                        type="text"
                        placeholder="Squad Name"
                        name="name"
                        value={squad.name}
                        onChange={evt =>
                          index !== undefined
                            ? onChangeInputPlatoonSquadName(
                                index,
                                s_index,
                                evt.currentTarget.name,
                                evt.currentTarget.value,
                              )
                            : onChangeInputPlatoonSquad(
                                'squads',
                                s_index,
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
                ) : (
                  <p>{squad.name}</p>
                )}
                <Teams
                  platoon_index={index}
                  squad_index={s_index}
                  teams={squad.teams}
                  onAddPlatoonSquadTeamGroup={onAddPlatoonSquadTeamGroup}
                  onAddSquadTeamGroup={onAddSquadTeamGroup}
                  onDeletePlatoonSquadTeamGroup={onDeletePlatoonSquadTeamGroup}
                  onDeleteSquadTeamGroup={onDeleteSquadTeamGroup}
                  onChangeInputPlatoonSquadTeamName={
                    onChangeInputPlatoonSquadTeamName
                  }
                  onChangeInputSquadTeamName={onChangeInputSquadTeamName}
                  editable={editable}
                />
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default memo(Squads);
