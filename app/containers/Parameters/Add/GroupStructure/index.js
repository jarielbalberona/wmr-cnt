/**
 *
 * GroupStructure
 *
 */

import React, { memo } from 'react';
import Select from 'react-select';
import Platoons from 'components/ParametersComponents/Platoons';
import Squads from 'components/ParametersComponents/Squads';

function GroupStructure({
  group_org,
  selected_group,
  rebel_group_options,
  dd_open,
  onSelectGroup,
  setDDOpen,
  onAddPlatoonGroup,
  onAddSquadGroup,
  onAddPlatoonSquadGroup,
  onAddPlatoonSquadTeamGroup,
  onAddSquadTeamGroup,
  onDeletePlatoonGroup,
  onDeleteSquadGroup,
  onDeletePlatoonSquadGroup,
  onDeletePlatoonSquadTeamGroup,
  onDeleteSquadTeamGroup,
  onChangeInputPlatoonSquad,
  onChangeInputPlatoonSquadName,
  onChangeInputPlatoonSquadTeamName,
  onChangeInputSquadTeamName,
  onSaveGroupOrg,
}) {
  return (
    <div className="">
      <div className="title">Group Structure</div>
      <div className="columns">
        <div className="column is-two-fifths">
          <Select
            placeholder="Group"
            className="cx-create-select"
            classNamePrefix="cx"
            value={selected_group}
            options={rebel_group_options}
            onChange={selected => onSelectGroup(selected)}
          />
        </div>
      </div>
      {group_org ? (
        <>
          <div className="columns">
            <div className="column">
              <div className="title is-4">{group_org.name}</div>
              <div className="group-structure-actions">
                <div
                  id="pltnsqd"
                  className={`dropdown ${dd_open.pltnsqd ? 'is-active' : ''}`}
                >
                  <div className="dropdown-trigger">
                    <button
                      type="button"
                      className="button is-primary"
                      aria-haspopup="true"
                      aria-controls="dropdown-menu"
                      onClick={() =>
                        setDDOpen({
                          ...dd_open,
                          pltnsqd: !dd_open.pltnsqd,
                        })
                      }
                    >
                      <span>Add Platoon / Squad</span>
                      <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </button>
                  </div>
                  <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                      <div className="dropdown-item">
                        <button
                          type="button"
                          className="button is-fullwidth"
                          onClick={() => {
                            onAddPlatoonGroup();
                            setDDOpen({
                              ...dd_open,
                              pltnsqd: !dd_open.pltnsqd,
                            });
                          }}
                        >
                          + Platoon
                        </button>
                      </div>
                      <div className="dropdown-item">
                        <button
                          type="button"
                          className="button is-fullwidth"
                          onClick={() => {
                            onAddSquadGroup();
                            setDDOpen({
                              ...dd_open,
                              pltnsqd: !dd_open.pltnsqd,
                            });
                          }}
                        >
                          + Squad
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="button is-primary"
                  onClick={() => onSaveGroupOrg()}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
          {group_org.platoons.length === 0 && group_org.squads.length === 0 ? (
            <div className="column">
              <div className="title is-size-6 has-text-weight-light container-title">
                Platoon and/or squad are empty, consider adding.
              </div>
            </div>
          ) : (
            <>
              <Platoons
                platoons={group_org.platoons}
                onAddPlatoonSquadGroup={onAddPlatoonSquadGroup}
                onAddPlatoonSquadTeamGroup={onAddPlatoonSquadTeamGroup}
                onAddSquadTeamGroup={onAddSquadTeamGroup}
                onDeletePlatoonGroup={onDeletePlatoonGroup}
                onDeletePlatoonSquadGroup={onDeletePlatoonSquadGroup}
                onDeletePlatoonSquadTeamGroup={onDeletePlatoonSquadTeamGroup}
                onChangeInputPlatoonSquad={onChangeInputPlatoonSquad}
                onChangeInputPlatoonSquadName={onChangeInputPlatoonSquadName}
                onChangeInputPlatoonSquadTeamName={
                  onChangeInputPlatoonSquadTeamName
                }
                editable
              />
              <Squads
                squads={group_org.squads}
                onAddSquadTeamGroup={onAddSquadTeamGroup}
                onDeleteSquadGroup={onDeleteSquadGroup}
                onDeleteSquadTeamGroup={onDeleteSquadTeamGroup}
                onChangeInputPlatoonSquad={onChangeInputPlatoonSquad}
                onChangeInputSquadTeamName={onChangeInputSquadTeamName}
                editable
                is_parent
              />
            </>
          )}
        </>
      ) : (
        <div className="column">
          <p>Select a group.</p>
        </div>
      )}
    </div>
  );
}

export default memo(GroupStructure);
