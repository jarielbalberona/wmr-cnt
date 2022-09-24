/* eslint-disable react/no-array-index-key */
/**
 *
 * Teams
 *
 */

import React, { memo } from 'react';
import { isEmpty } from 'lodash';
import Select from 'react-select';
import '../styles.scss';

function OrganizeOrganization({
  group_form,
  rebels_options,
  onChangeStaff,
  onChangePlatoonOfficer,
  onChangePlatoonSquadOfficer,
  onChangePlatoonSquadTeamOfficer,
  onChangePlatoonSquadTeamMember,
  onChangeSquadOfficer,
  onChangeSquadTeamOfficer,
  onChangeSquadTeamMember,
}) {
  return (
    <div id="OrganizeOrganization">
      <div className="title is-size-4">{group_form.name}</div>
      {!isEmpty(group_form) ? (
        <div className="columns">
          <div className="column">
            <div className="box">
              <div className="title is-size-6 has-text-weight-medium container-title">
                Staffs
              </div>
              <div className="columns">
                <div className="column">
                  <Select
                    isClearable
                    placeholder="Intel"
                    className="cx-create-select"
                    classNamePrefix="cx"
                    options={rebels_options}
                    value={
                      group_form.staffs.intel !== ''
                        ? {
                            value: group_form.staffs.intel,
                            label: group_form.staffs.intel,
                          }
                        : null
                    }
                    onChange={selected =>
                      onChangeStaff({
                        name: 'intel',
                        value: selected ? selected.label : '',
                      })
                    }
                  />
                </div>
                <div className="column">
                  <Select
                    isClearable
                    placeholder="Ordnance"
                    className="cx-create-select"
                    classNamePrefix="cx"
                    options={rebels_options}
                    value={
                      group_form.staffs.ordnance !== ''
                        ? {
                            value: group_form.staffs.ordnance,
                            label: group_form.staffs.ordnance,
                          }
                        : null
                    }
                    onChange={selected =>
                      onChangeStaff({
                        name: 'ordnance',
                        value: selected ? selected.label : '',
                      })
                    }
                  />
                </div>
                <div className="column">
                  <Select
                    isClearable
                    placeholder="Medical"
                    className="cx-create-select"
                    classNamePrefix="cx"
                    options={rebels_options}
                    value={
                      group_form.staffs.medical !== ''
                        ? {
                            value: group_form.staffs.medical,
                            label: group_form.staffs.medical,
                          }
                        : null
                    }
                    onChange={selected =>
                      onChangeStaff({
                        name: 'medical',
                        value: selected ? selected.label : '',
                      })
                    }
                  />
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <Select
                    isClearable
                    placeholder="Finance"
                    className="cx-create-select"
                    classNamePrefix="cx"
                    options={rebels_options}
                    value={
                      group_form.staffs.finance !== ''
                        ? {
                            value: group_form.staffs.finance,
                            label: group_form.staffs.finance,
                          }
                        : null
                    }
                    onChange={selected =>
                      onChangeStaff({
                        name: 'finance',
                        value: selected ? selected.label : '',
                      })
                    }
                  />
                </div>
                <div className="column">
                  <Select
                    isClearable
                    placeholder="Liaison"
                    className="cx-create-select"
                    classNamePrefix="cx"
                    options={rebels_options}
                    value={
                      group_form.staffs.liaison !== ''
                        ? {
                            value: group_form.staffs.liaison,
                            label: group_form.staffs.liaison,
                          }
                        : null
                    }
                    onChange={selected =>
                      onChangeStaff({
                        name: 'liaison',
                        value: selected ? selected.label : '',
                      })
                    }
                  />
                </div>
                <div className="column">
                  <Select
                    isClearable
                    placeholder="Education"
                    className="cx-create-select"
                    classNamePrefix="cx"
                    options={rebels_options}
                    value={
                      group_form.staffs.education !== ''
                        ? {
                            value: group_form.staffs.education,
                            label: group_form.staffs.education,
                          }
                        : null
                    }
                    onChange={selected =>
                      onChangeStaff({
                        name: 'education',
                        value: selected ? selected.label : '',
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="columns is-multiline">
        {group_form &&
          group_form.platoons &&
          group_form.platoons.map((platoon, index) => (
            <div key={index} className="column is-half">
              <div className="box has-background-primary">
                <div className="title is-size-6 has-text-white has-text-weight-medium container-title">
                  {platoon.name}
                </div>
                <div className="columns is-multiline">
                  <div className="column is-half">
                    <Select
                      isClearable
                      placeholder="Leader"
                      className="cx-create-select"
                      classNamePrefix="cx"
                      options={rebels_options}
                      value={
                        platoon.officers.leader !== ''
                          ? {
                              value: platoon.officers.leader,
                              label: platoon.officers.leader,
                            }
                          : null
                      }
                      onChange={selected =>
                        onChangePlatoonOfficer({
                          index,
                          name: 'leader',
                          value: selected ? selected.label : '',
                        })
                      }
                    />
                  </div>
                  <div className="column is-half">
                    <Select
                      isClearable
                      placeholder="Vice Leader"
                      className="cx-create-select"
                      classNamePrefix="cx"
                      options={rebels_options}
                      value={
                        platoon.officers.vice_leader !== ''
                          ? {
                              value: platoon.officers.vice_leader,
                              label: platoon.officers.vice_leader,
                            }
                          : null
                      }
                      onChange={selected =>
                        onChangePlatoonOfficer({
                          index,
                          name: 'vice_leader',
                          value: selected ? selected.label : '',
                        })
                      }
                    />
                  </div>
                  <div className="column is-half">
                    <Select
                      isClearable
                      placeholder="Political Instructor"
                      className="cx-create-select"
                      classNamePrefix="cx"
                      options={rebels_options}
                      value={
                        platoon.officers.political_instructor !== ''
                          ? {
                              value: platoon.officers.political_instructor,
                              label: platoon.officers.political_instructor,
                            }
                          : null
                      }
                      onChange={selected =>
                        onChangePlatoonOfficer({
                          index,
                          name: 'political_instructor',
                          value: selected ? selected.label : '',
                        })
                      }
                    />
                  </div>
                  <div className="column is-half">
                    <Select
                      isClearable
                      placeholder="Vice Political Instructor"
                      className="cx-create-select"
                      classNamePrefix="cx"
                      options={rebels_options}
                      value={
                        platoon.officers.vice_political_instructor !== ''
                          ? {
                              value: platoon.officers.vice_political_instructor,
                              label: platoon.officers.vice_political_instructor,
                            }
                          : null
                      }
                      onChange={selected =>
                        onChangePlatoonOfficer({
                          index,
                          name: 'vice_political_instructor',
                          value: selected ? selected.label : '',
                        })
                      }
                    />
                  </div>
                </div>
                <div className="columns is-multiline">
                  {platoon.squads &&
                    platoon.squads.map((squad, s_index) => (
                      <div key={s_index} className="column is-half">
                        <div className="box">
                          <div className="title is-size-6 has-text-weight-medium container-title">
                            {squad.name}
                          </div>
                          <div className="columns">
                            <div className="column">
                              <Select
                                isClearable
                                placeholder="Leader"
                                className="cx-create-select"
                                classNamePrefix="cx"
                                options={rebels_options}
                                value={
                                  squad.officers.leader !== ''
                                    ? {
                                        value: squad.officers.leader,
                                        label: squad.officers.leader,
                                      }
                                    : null
                                }
                                onChange={selected =>
                                  onChangePlatoonSquadOfficer({
                                    platoon_index: index,
                                    squad_index: s_index,
                                    name: 'leader',
                                    value: selected ? selected.label : '',
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="columns">
                            <div className="column">
                              <Select
                                isClearable
                                placeholder="Vice Leader"
                                className="cx-create-select"
                                classNamePrefix="cx"
                                options={rebels_options}
                                value={
                                  squad.officers.vice_leader !== ''
                                    ? {
                                        value: squad.officers.vice_leader,
                                        label: squad.officers.vice_leader,
                                      }
                                    : null
                                }
                                onChange={selected =>
                                  onChangePlatoonSquadOfficer({
                                    platoon_index: index,
                                    squad_index: s_index,
                                    name: 'vice_leader',
                                    value: selected ? selected.label : '',
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="columns is-multiline">
                            {squad.teams &&
                              squad.teams.map((team, t_index) => {
                                const team_members = [];
                                if (team.members.length !== 0) {
                                  team.members.map(member =>
                                    team_members.push({
                                      value: member.name,
                                      label: member.name,
                                    }),
                                  );
                                }
                                return (
                                  <div key={t_index} className="column is-full">
                                    <div className="box">
                                      <div className="title is-size-6 has-text-weight-medium container-title">
                                        {team.name}
                                      </div>
                                      <div className="columns">
                                        <div className="column">
                                          <Select
                                            isClearable
                                            placeholder="Leader"
                                            className="cx-create-select"
                                            classNamePrefix="cx"
                                            options={rebels_options}
                                            value={
                                              team.officers.leader !== ''
                                                ? {
                                                    value: team.officers.leader,
                                                    label: team.officers.leader,
                                                  }
                                                : null
                                            }
                                            onChange={selected =>
                                              onChangePlatoonSquadTeamOfficer({
                                                platoon_index: index,
                                                squad_index: s_index,
                                                team_index: t_index,
                                                name: 'leader',
                                                value: selected
                                                  ? selected.label
                                                  : '',
                                              })
                                            }
                                          />
                                        </div>
                                      </div>
                                      <div className="columns">
                                        <div className="column">
                                          <Select
                                            isClearable
                                            placeholder="Vice Leader"
                                            className="cx-create-select"
                                            classNamePrefix="cx"
                                            options={rebels_options}
                                            value={
                                              team.officers.vice_leader !== ''
                                                ? {
                                                    value:
                                                      team.officers.vice_leader,
                                                    label:
                                                      team.officers.vice_leader,
                                                  }
                                                : null
                                            }
                                            onChange={selected =>
                                              onChangePlatoonSquadTeamOfficer({
                                                platoon_index: index,
                                                squad_index: s_index,
                                                team_index: t_index,
                                                name: 'vice_leader',
                                                value: selected
                                                  ? selected.label
                                                  : '',
                                              })
                                            }
                                          />
                                        </div>
                                      </div>
                                      <div className="columns">
                                        <div className="column">
                                          <Select
                                            isClearable
                                            isMulti
                                            placeholder="Member/s"
                                            className="cx-create-select"
                                            classNamePrefix="cx"
                                            options={rebels_options}
                                            value={team_members}
                                            onChange={selected =>
                                              onChangePlatoonSquadTeamMember({
                                                platoon_index: index,
                                                squad_index: s_index,
                                                team_index: t_index,
                                                name: 'members',
                                                value: selected,
                                              })
                                            }
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="columns is-multiline">
        {group_form.squads &&
          group_form.squads.map((squad, s_index) => (
            <div key={s_index} className="column is-half">
              <div className="box">
                <div className="title is-size-6 has-text-weight-medium container-title">
                  {squad.name}
                </div>
                <div className="columns">
                  <div className="column">
                    <Select
                      isClearable
                      placeholder="Leader"
                      className="cx-create-select"
                      classNamePrefix="cx"
                      options={rebels_options}
                      value={
                        squad.officers.leader !== ''
                          ? {
                              value: squad.officers.leader,
                              label: squad.officers.leader,
                            }
                          : null
                      }
                      onChange={selected =>
                        onChangeSquadOfficer({
                          squad_index: s_index,
                          name: 'leader',
                          value: selected ? selected.label : '',
                        })
                      }
                    />
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <Select
                      isClearable
                      placeholder="Vice Leader"
                      className="cx-create-select"
                      classNamePrefix="cx"
                      options={rebels_options}
                      value={
                        squad.officers.vice_leader !== ''
                          ? {
                              value: squad.officers.vice_leader,
                              label: squad.officers.vice_leader,
                            }
                          : null
                      }
                      onChange={selected =>
                        onChangeSquadOfficer({
                          squad_index: s_index,
                          name: 'vice_leader',
                          value: selected ? selected.label : '',
                        })
                      }
                    />
                  </div>
                </div>
                <div className="columns is-multiline">
                  {squad.teams &&
                    squad.teams.map((team, t_index) => {
                      const squad_team_members = [];
                      if (team.members.length !== 0) {
                        team.members.map(member =>
                          squad_team_members.push({
                            value: member.name,
                            label: member.name,
                          }),
                        );
                      }
                      return (
                        <div key={t_index} className="column is-full">
                          <div className="box">
                            <div className="title is-size-6 has-text-weight-medium container-title">
                              {team.name}
                            </div>
                            <div className="columns">
                              <div className="column">
                                <Select
                                  isClearable
                                  placeholder="Leader"
                                  className="cx-create-select"
                                  classNamePrefix="cx"
                                  options={rebels_options}
                                  value={
                                    team.officers.leader !== ''
                                      ? {
                                          value: team.officers.leader,
                                          label: team.officers.leader,
                                        }
                                      : null
                                  }
                                  onChange={selected =>
                                    onChangeSquadTeamOfficer({
                                      squad_index: s_index,
                                      team_index: t_index,
                                      name: 'leader',
                                      value: selected ? selected.label : '',
                                    })
                                  }
                                />
                              </div>
                            </div>
                            <div className="columns">
                              <div className="column">
                                <Select
                                  isClearable
                                  placeholder="Vice Leader"
                                  className="cx-create-select"
                                  classNamePrefix="cx"
                                  options={rebels_options}
                                  value={
                                    team.officers.vice_leader !== ''
                                      ? {
                                          value: team.officers.vice_leader,
                                          label: team.officers.vice_leader,
                                        }
                                      : null
                                  }
                                  onChange={selected =>
                                    onChangeSquadTeamOfficer({
                                      squad_index: s_index,
                                      team_index: t_index,
                                      name: 'vice_leader',
                                      value: selected ? selected.label : '',
                                    })
                                  }
                                />
                              </div>
                            </div>
                            <div className="columns">
                              <div className="column">
                                <Select
                                  isClearable
                                  isMulti
                                  placeholder="Member/s"
                                  className="cx-create-select"
                                  classNamePrefix="cx"
                                  options={rebels_options}
                                  value={squad_team_members}
                                  onChange={selected =>
                                    onChangeSquadTeamMember({
                                      squad_index: s_index,
                                      team_index: t_index,
                                      name: 'members',
                                      value: selected,
                                    })
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          ))}
      </div>
      {group_form &&
      group_form.platoons &&
      group_form.platoons.length === 0 &&
      group_form.squads &&
      group_form.squads.length === 0 ? (
        <div className="column">
          <div className="title is-4">No available Platoon or Squad.</div>
          <div className="subtitle is-6">
            You may update this Gruop by going to Paramters -&gt; Add -&gt;
            Group Structure.
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default memo(OrganizeOrganization);
