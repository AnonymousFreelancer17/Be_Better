import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import Header from "../components/Header";

const Fitness = () => {
  const data = {
    workout_plan: {
      profile: {
        goal: "Muscle Building and Flexibility",
        weight: "66kg",
        height: "172cm",
        workout_type: "Full Body Workout",
        days_per_week: 6,
      },
      daily_routine: [
        {
          title: "Warm-up",
          description: "Prepare the body for workout",
          exercises: [
            {
              name: "Jumping Jacks",
              duration: "5 minutes",
            },
            {
              name: "Dynamic Stretching",
              duration: "5 minutes",
              details: "Arm circles, hip rotations, leg swings",
            },
          ],
        },
        {
          title: "Strength Training",
          description: "Build muscle strength and endurance",
          exercises: [
            {
              name: "Push-ups",
              sets: 3,
              reps: "12-15",
              target_muscles: ["Chest", "Shoulders", "Triceps"],
            },
            {
              name: "Pull-ups / Assisted Pull-ups",
              sets: 3,
              reps: "8-10",
              target_muscles: ["Back", "Biceps"],
            },
            {
              name: "Bodyweight Squats",
              sets: 3,
              reps: "15-20",
              target_muscles: ["Legs", "Glutes"],
            },
            {
              name: "Lunges",
              sets: 3,
              reps: "12 each leg",
              target_muscles: ["Legs", "Core", "Balance"],
            },
            {
              name: "Dumbbell Shoulder Press",
              sets: 3,
              reps: "12",
              target_muscles: ["Shoulders", "Arms"],
              equipment: "Dumbbells or Water Bottles",
            },
            {
              name: "Plank Hold",
              sets: 3,
              duration_per_set: "30-45 seconds",
              target_muscles: ["Core Stability"],
            },
            {
              name: "Mountain Climbers",
              sets: 3,
              reps: "20 each leg",
              target_muscles: ["Core", "Cardio"],
            },
          ],
        },
        {
          title: "Flexibility Training",
          description: "Improve mobility and prevent injuries",
          exercises: [
            {
              name: "Hamstring Stretch",
              duration: "30 seconds each leg",
            },
            {
              name: "Quad Stretch",
              duration: "30 seconds each leg",
            },
            {
              name: "Cat-Cow Stretch",
              duration: "1 minute",
            },
            {
              name: "Shoulder Stretch",
              duration: "30 seconds each arm",
            },
            {
              name: "Chest Opener Stretch",
              duration: "30 seconds",
            },
            {
              name: "Seated Forward Bend",
              duration: "1 minute",
            },
            {
              name: "Cobra Stretch",
              duration: "30 seconds",
            },
          ],
        },
        {
          title: "Cooldown",
          description: "Relax the body and normalize heart rate",
          exercises: [
            {
              name: "Light Walking or Deep Breathing",
              duration: "5 minutes",
            },
          ],
        },
      ],
      notes:
        "Focus on proper form. Gradually increase resistance or reps as strength improves. Take 1 full rest day per week if needed.",
    },
  };

  return (
    <View className="w-screen h-screen flex-1 bg-primary flex justify-center items-center">
      <Header />
      <View className="w-full h-full flex-1 flex flex-col justify-start items-center">
        <View className="h-[60px] w-screen flex justify-center items-center bg-red-400">
          <Text className="font-medium text-lg text-white">
            Specialized Training regime tailored for you!
          </Text>
        </View>

        <ScrollView
          className="w-full flex-1 bg-gray-400"
        >
          {data.workout_plan.daily_routine?.map((item, idx) => {
            return (
              <View key={idx} className="w-full bg-secondary p-2">
                {item.exercises?.map((d, idx) => {
                  return (
                    <View
                      key={idx}
                      className="w-full h-[200px] text-center border border-white bg-green-400 p-2 mb-1"
                    >
                      <Text className="text-white">
                        {/* {JSON.stringify(d)} */}
                        {d.name}
                      </Text>
                      <Text className="text-white">
                         {/* - {d.duration? d.duration : ""} */}
                      </Text>

                    </View>
                  );
                })}
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Fitness;
