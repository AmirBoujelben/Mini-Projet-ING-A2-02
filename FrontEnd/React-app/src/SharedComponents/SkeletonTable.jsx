import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonTable = () => {
    return (
        <table className="min-w-[97%] divide-y divide-gray-200 mx-auto">
          <thead className="bg-gray-200">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
              >
                <Skeleton width={80} />
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
              >
                <Skeleton width={120} />
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
              >
                <Skeleton width={100} />
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
              >
                <Skeleton width={120} />
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
              >
                <Skeleton width={80} />
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {[1, 2, 3, 4, 5].map((i) => (
              <tr key={i}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Skeleton width={40} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Skeleton width={100} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Skeleton width={120} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Skeleton width={100} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Skeleton width={40} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    };
