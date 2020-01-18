/**
 *
 * Teams
 *
 */

import React, { memo } from 'react';
import '../styles.scss';

function Teams({
  platoon_index,
  squad_index,
  teams,
  onAddPlatoonSquadTeamGroup,
  onAddSquadTeamGroup,
  onDeletePlatoonSquadTeamGroup,
  onDeleteSquadTeamGroup,
  onChangeInputPlatoonSquadTeamName,
  onChangeInputSquadTeamName,
  editable,
}) {
  return (
    <div id="Teams" className="content">
      <ul>
        <div className="title is-size-7 has-text-weight-light container-title">
          Team/s
        </div>
        {editable ? (
          <div className="field">
            <div className="control">
              <button
                type="button"
                className="button is-small is-primary"
                onClick={() =>
                  platoon_index !== undefined
                    ? onAddPlatoonSquadTeamGroup(platoon_index, squad_index)
                    : onAddSquadTeamGroup(squad_index)
                }
              >
                + Team
              </button>
            </div>
          </div>
        ) : (
          ''
        )}
        {teams &&
          teams.length !== 0 &&
          teams.map((team, tm_key) => (
            <li
              // eslint-disable-next-line react/no-array-index-key
              key={tm_key}
              id="Team"
            >
              {editable ? (
                <>
                  <div className="field">
                    <p className="control has-icons-right">
                      <input
                        className="input"
                        type="text"
                        placeholder="Team Name"
                        name="name"
                        value={team.name}
                        onChange={evt =>
                          platoon_index !== undefined
                            ? onChangeInputPlatoonSquadTeamName(
                                platoon_index,
                                squad_index,
                                tm_key,
                                evt.currentTarget.name,
                                evt.currentTarget.value,
                              )
                            : onChangeInputSquadTeamName(
                                squad_index,
                                tm_key,
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
                  <div className="group-actions">
                    <button
                      type="button"
                      className="button"
                      onClick={() =>
                        platoon_index !== undefined
                          ? onDeletePlatoonSquadTeamGroup(
                              platoon_index,
                              squad_index,
                              tm_key,
                          )
                          : onDeleteSquadTeamGroup(squad_index, tm_key)
                      }
                    >
                      <span className="icon is-small is-right has-text-primary">
                        <i className="fas fa-trash"></i>
                      </span>
                    </button>
                  </div>
                </>
              ) : (
                <p className="is-size-7">{team.name}</p>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default memo(Teams);
