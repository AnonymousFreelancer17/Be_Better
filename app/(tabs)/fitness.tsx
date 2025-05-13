import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Fitness = () => {
  // const data = {
  //   workout_plan: {
  //     profile: {
  //       goal: "Muscle Building and Flexibility",
  //       weight: "66kg",
  //       height: "172cm",
  //       workout_type: "Full Body Workout",
  //       days_per_week: 6,
  //     },
  //     daily_routine: [
  //       {
  //         title: "Warm-up",
  //         description: "Prepare the body for workout",
  //         exercises: [
  //           {
  //             name: "Jumping Jacks",
  //             duration: "5 minutes",
  //           },
  //           {
  //             name: "Dynamic Stretching",
  //             duration: "5 minutes",
  //             details: "Arm circles, hip rotations, leg swings",
  //           },
  //         ],
  //       },
  //       {
  //         title: "Strength Training",
  //         description: "Build muscle strength and endurance",
  //         exercises: [
  //           {
  //             name: "Push-ups",
  //             sets: 3,
  //             reps: "12-15",
  //             target_muscles: ["Chest", "Shoulders", "Triceps"],
  //           },
  //           {
  //             name: "Pull-ups / Assisted Pull-ups",
  //             sets: 3,
  //             reps: "8-10",
  //             target_muscles: ["Back", "Biceps"],
  //           },
  //           {
  //             name: "Bodyweight Squats",
  //             sets: 3,
  //             reps: "15-20",
  //             target_muscles: ["Legs", "Glutes"],
  //           },
  //           {
  //             name: "Lunges",
  //             sets: 3,
  //             reps: "12 each leg",
  //             target_muscles: ["Legs", "Core", "Balance"],
  //           },
  //           {
  //             name: "Dumbbell Shoulder Press",
  //             sets: 3,
  //             reps: "12",
  //             target_muscles: ["Shoulders", "Arms"],
  //             equipment: "Dumbbells or Water Bottles",
  //           },
  //           {
  //             name: "Plank Hold",
  //             sets: 3,
  //             duration_per_set: "30-45 seconds",
  //             target_muscles: ["Core Stability"],
  //           },
  //           {
  //             name: "Mountain Climbers",
  //             sets: 3,
  //             reps: "20 each leg",
  //             target_muscles: ["Core", "Cardio"],
  //           },
  //         ],
  //       },
  //       {
  //         title: "Flexibility Training",
  //         description: "Improve mobility and prevent injuries",
  //         exercises: [
  //           {
  //             name: "Hamstring Stretch",
  //             duration: "30 seconds each leg",
  //           },
  //           {
  //             name: "Quad Stretch",
  //             duration: "30 seconds each leg",
  //           },
  //           {
  //             name: "Cat-Cow Stretch",
  //             duration: "1 minute",
  //           },
  //           {
  //             name: "Shoulder Stretch",
  //             duration: "30 seconds each arm",
  //           },
  //           {
  //             name: "Chest Opener Stretch",
  //             duration: "30 seconds",
  //           },
  //           {
  //             name: "Seated Forward Bend",
  //             duration: "1 minute",
  //           },
  //           {
  //             name: "Cobra Stretch",
  //             duration: "30 seconds",
  //           },
  //         ],
  //       },
  //       {
  //         title: "Cooldown",
  //         description: "Relax the body and normalize heart rate",
  //         exercises: [
  //           {
  //             name: "Light Walking or Deep Breathing",
  //             duration: "5 minutes",
  //           },
  //         ],
  //       },
  //     ],
  //     notes:
  //       "Focus on proper form. Gradually increase resistance or reps as strength improves. Take 1 full rest day per week if needed.",
  //   },
  // };

  const { lightTheme } = useSelector((state: RootState) => state.setting);

  const data = {
    user: {
      age: "",
      height: "",
      weight: "",
      BMR: "BMR=10 * weight (kg)+6.25 * height(cm) - 5*age(years)+5",
      prevActivityLevel: "",
      currActivityLevel: "",
      futureActivityLevel: "",
      goal: {
        targetWeight: "",
        muscleGrowth: "",
        shredding: "",
      },
      calorieDetails: {
        dailyCaloriesRequired: 2500,
        caloriesForMuscleGrowth: 2700,
        caloriesForShredding: 2200,
        macroBreakdown: {
          protein: "2.2g per kg body weight",
          carbs: "3g per kg body weight",
          fats: "1g per kg body weight",
        },
      },
      trainingRegime: [
        {
          workoutType: "Home",
          sections: [
            {
              title: "Warm-ups",
              exercises: [
                {
                  name: "",
                  reps: "",
                  description: "",
                  equipments: "",
                  targetMuscleGroup: "",
                },
              ],
            },
            {
              title: "lowerBody",
              exercises: [
                {
                  name: "",
                  reps: "",
                  description: "",
                  equipments: "",
                  targetMuscleGroup: "",
                },
              ],
            },
            {
              title: "core",
              exercises: [
                {
                  name: "",
                  reps: "",
                  description: "",
                  equipments: "",
                  targetMuscleGroup: "",
                },
              ],
            },
            {
              title: "UpperBody",
              exercises: [
                {
                  name: "",
                  reps: "",
                  description: "",
                  equipments: "",
                  targetMuscleGroup: "",
                },
              ],
            },
          ],
        },
        {
          workoutType: "Gym",
          sections: [
            {
              title: "Warm-ups",
              exercises: [
                {
                  name: "",
                  reps: "",
                  description: "",
                  equipments: "",
                  targetMuscleGroup: "",
                },
              ],
            },
            {
              title: "lowerBody",
              exercises: [
                {
                  name: "",
                  reps: "",
                  description: "",
                  equipments: "",
                  targetMuscleGroup: "",
                },
              ],
            },
            {
              title: "core",
              exercises: [
                {
                  name: "",
                  reps: "",
                  description: "",
                  equipments: "",
                  targetMuscleGroup: "",
                },
              ],
            },
            {
              title: "UpperBody",
              exercises: [
                {
                  name: "",
                  reps: "",
                  description: "",
                  equipments: "",
                  targetMuscleGroup: "",
                },
              ],
            },
          ],
        },
        {
          workoutType: "Calesthenics",
          sections: [
            {
              title: "Warm-ups",
              exercises: [
                {
                  name: "",
                  reps: "",
                  description: "",
                  equipments: "",
                  targetMuscleGroup: "",
                },
              ],
            },
            {
              title: "lowerBody",
              exercises: [
                {
                  name: "",
                  reps: "",
                  description: "",
                  equipments: "",
                  targetMuscleGroup: "",
                },
              ],
            },
            {
              title: "core",
              exercises: [
                {
                  name: "",
                  reps: "",
                  description: "",
                  equipments: "",
                  targetMuscleGroup: "",
                },
              ],
            },
            {
              title: "UpperBody",
              exercises: [
                {
                  name: "",
                  reps: "",
                  description: "",
                  equipments: "",
                  targetMuscleGroup: "",
                },
              ],
            },
          ],
        },
      ],
    },
  };

  return (
    <View className="w-screen h-screen flex-1 bg-primary flex justify-center items-center">
      <Header route={"Fitness"} />
      <View
        className={`w-full h-full flex-1 flex flex-col justify-start items-center ${
          lightTheme ? "bg-light-background" : "bg-dark-background"
        } `}
      >
        <ScrollView className="w-full flex-1 "></ScrollView>
      </View>
    </View>
  );
};

export default Fitness;
