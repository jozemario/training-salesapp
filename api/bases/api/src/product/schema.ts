// import { Asserts, number, object, string } from 'yup';
// import { ActivitySaveCmd } from '../../../../components/be/activity/src/model';
// import { Activity } from '@prisma/client';

// export const ActivitySaveRequestSchema = object({
//   name: string().required().min(2).max(15),
//   authorId: number().required().integer(),
// });

// export interface ActivitySaveRequest
//   extends Asserts<typeof ActivitySaveRequestSchema> {}

// export const activitySaveRequestToActivityCreate = (
//   activity: ActivitySaveRequest,
// ): ActivitySaveCmd => {
//   return {
//     name: activity.name as string,
//     authorId: activity.authorId as number,
//   };
// };

// export interface ActivitySaveResponse {
//   id: number;
//   name: string;
//   authorId: number;
// }

// export const activitySaveResponseFromModel = (
//   activity: Activity,
// ): ActivitySaveResponse => {
//   return {
//     id: activity.id,
//     name: activity.name,
//     authorId: activity.authorId,
//   };
// };
export {};
