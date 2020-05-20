import { sequelize } from '@/models';

export const Truncate = () => {
  return Promise.all(
    Object.keys(sequelize.models).map(key => {
      return sequelize.models[key].destroy({ truncate: true, force: true });
    }),
  );
};
