# Check if no arguments are passed
if [ $# -eq 0 ]; then
  echo "No arguments supplied"
else
  # Loop through the arguments (maximum 3)
  for i in "$1" "$2" "$3"; do
    # If argument exists, print it
    if [ -n "$i" ]; then
      echo "$i"
    fi
  done
fi
