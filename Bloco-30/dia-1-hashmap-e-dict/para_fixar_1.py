def count(nums):
    count = {}
    most_frequent = nums[0]

    for num in nums:
        if num not in count:
            count[num] = 1
        else:
            count[num] += 1

        if count[num] > count[most_frequent]:
            most_frequent = num
    
    return most_frequent

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]
print(count(nums))